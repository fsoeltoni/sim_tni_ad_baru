import React from "react";
import { List, Datagrid, TextField } from "react-admin";
import lingkup from "..";

const JenisPomdamList = props => {
  const {
    components: { list },
    fields: { id, nama, created, updated }
  } = lingkup;

  return (
    <List {...props} {...list}>
      <Datagrid>
        <TextField {...id} />
        <TextField {...nama} />
      </Datagrid>
    </List>
  );
};

export default JenisPomdamList;
