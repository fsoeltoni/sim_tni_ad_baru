import React from "react";
import { Admin, Resource } from "react-admin";
import attrs from "./providers/attrs";
import data from "./providers/data";
import sim from "./resources/sim";
import Dashboard from "./layouts/dashboard/Dashboard";
import penyelenggara from "./resources/penyelenggara";
import lingkup from "./resources/lingkup";
import jenis_pomdam from "./resources/jenis_pomdam";

const title = attrs.title;
const dataProvider = data;
const dashboard = Dashboard;

const App = () => (
  <Admin title={title} dataProvider={dataProvider} dashboard={dashboard}>
    <Resource {...sim.identities} />
    <Resource {...penyelenggara.identities} />
    <Resource {...jenis_pomdam.identities} />
    <Resource {...lingkup.identities} />
  </Admin>
);

export default App;
