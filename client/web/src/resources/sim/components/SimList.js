import React from "react";
import { List, Datagrid, TextField, DateField } from "react-admin";
import sim from "..";
import moment from "moment";

const now = moment();

const SimList = props => {
  const {
    components: { list },
    fields: { id, pada_tanggal, berlaku_hingga, created, updated }
  } = sim;

  return (
    <List {...props} {...list}>
      <Datagrid>
        <TextField {...id} />
        <DateField {...pada_tanggal} />
        <DateField {...berlaku_hingga} />
      </Datagrid>
    </List>
  );
};

export default SimList;
