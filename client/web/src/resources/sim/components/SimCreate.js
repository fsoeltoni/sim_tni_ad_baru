import React from "react";
import { Create, SimpleForm } from "react-admin";
import sim from "..";
import moment from "moment";

const now = moment();

const SimCreate = props => {
  const {
    components: { create },
    fields: { pada_tanggal, berlaku_hingga, created, updated }
  } = sim;

  const initialValues = {
    pada_tanggal: now,
    berlaku_hingga: moment(now).add(5, "y"),
    created: now,
    updated: now
  };

  return (
    <Create {...props} {...create}>
      <SimpleForm initialValues={initialValues}></SimpleForm>
    </Create>
  );
};

export default SimCreate;
