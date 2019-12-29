import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import lingkup from "..";
import moment from "moment";

const now = moment();

const LingkupCreate = props => {
  const {
    components: { create },
    fields: { nama, created, updated }
  } = lingkup;

  const initialValues = {
    created: now,
    updated: now
  };

  return (
    <Create {...props} {...create}>
      <SimpleForm initialValues={initialValues}>
        <TextInput {...nama} />
      </SimpleForm>
    </Create>
  );
};

export default LingkupCreate;
