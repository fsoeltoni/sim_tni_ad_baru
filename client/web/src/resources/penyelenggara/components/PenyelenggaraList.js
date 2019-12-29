import React from "react";
import {
  List,
  Datagrid,
  ReferenceField,
  TextField,
  FunctionField,
  EditButton,
  DeleteButton
} from "react-admin";
import penyelenggara from "..";
import lingkup_src from "../../lingkup";

const PenyelenggaraList = props => {
  const {
    components: { list },
    fields: { id, logo, lingkup, nama, kode, kode_romawi, created, updated }
  } = penyelenggara;

  const renderPenyelenggara = record => {
    return (
      (record.lingkup_id === 2 ? "Pomdam " : "") +
      (record.kode_romawi ? record.kode_romawi + "/" : "") +
      record.kode
    );
  };

  return (
    <List {...props} {...list}>
      <Datagrid>
        <TextField {...id} />
        <ReferenceField {...lingkup}>
          <TextField source={lingkup_src.fields.nama.source} />
        </ReferenceField>
        <FunctionField label="Nama" render={renderPenyelenggara} />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default PenyelenggaraList;
