import React, { useCallback, useState, useEffect } from "react";
import { useDataProvider, useVersion } from "react-admin";
import TotalSim from "./TotalSim";
import TotalSimPerBulan from "./TotalSimPerBulan";
import TotalPerPenyelenggara from "./TotalPerPenyelenggara";
import Identity from "./Identity";
import penyelenggara_src from "../../resources/penyelenggara";

const styles = {
  flex: { display: "flex" },
  flexColumn: { display: "flex", flexDirection: "column" },
  leftCol: { flex: 1, marginRight: "1em" },
  rightCol: { flex: 1, marginLeft: "1em" },
  singleCol: { marginTop: "2em", marginBottom: "2em" }
};

const Dashboard = props => {
  const [state, setState] = useState({});
  const version = useVersion();
  const dataProvider = useDataProvider();

  const fetchPenyelenggara = useCallback(async () => {
    const { data: penyelenggara } = await dataProvider.getList(
      penyelenggara_src.identities.name,
      {
        sort: { field: penyelenggara_src.fields.id.source, order: "ASC" },
        pagination: { page: 1, perPage: 20 }
      }
    );

    const nbPenyelenggara = penyelenggara.reduce(nb => ++nb, 0);
    setState(state => ({ ...state, penyelenggara, nbPenyelenggara }));
  }, [dataProvider]);

  useEffect(() => {
    fetchPenyelenggara();
  }, [version]);

  const { nbPenyelenggara, penyelenggara } = state;
  return (
    <div style={styles.flex}>
      <div style={styles.leftCol}>
        <div style={styles.flex}>
          <TotalSim />
          <TotalSimPerBulan />
        </div>

        <div style={styles.singleCol}>
          {/* <Welcome /> */} <Identity></Identity>{" "}
        </div>
        <div style={styles.singleCol}>
          {/* <PendingOrders
            orders={pendingOrders}
            customers={pendingOrdersCustomers}
          /> */}
        </div>
      </div>
      <div style={styles.rightCol}>
        <div style={styles.flex}>
          {/* <PendingReviews
            nb={nbPendingReviews}
            reviews={pendingReviews}
            customers={pendingReviewsCustomers}
          />
          <NewCustomers /> */}
          <TotalPerPenyelenggara
            nb={nbPenyelenggara}
            penyelenggara={penyelenggara}
          />
          {/* <TotalPerPenyelenggara
            nb={nbPenyelenggara}
            penyelenggara={penyelenggara}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
