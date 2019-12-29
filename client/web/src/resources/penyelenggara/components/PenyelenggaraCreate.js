import React from "react";
import {
  Create,
  TabbedForm,
  FormTab,
  ReferenceInput,
  SelectInput,
  TextInput,
  FormDataConsumer
} from "react-admin";
import penyelenggara from "..";
import moment from "moment";
import lingkup_src from "../../lingkup";
import jenis_pomdam_src from "../../jenis_pomdam";
import ImageInputBase64 from "../../../helpers/input/ImageInputBase64";

const now = moment();

const PenyelenggaraCreate = props => {
  const {
    components: { create },
    fields: {
      lingkup,
      jenis_pomdam,
      nama,
      kode,
      kode_romawi,
      logo,
      stempel,
      created,
      updated
    }
  } = penyelenggara;

  const isPomdam = lingkup => lingkup && lingkup === 2;
  const isPomdamUmum = (lingkup, jenis_pomdam) =>
    isPomdam(lingkup) && jenis_pomdam && jenis_pomdam === 2;

  const initialValues = {
    created: now,
    updated: now
  };

  return (
    <Create {...props} {...create}>
      <TabbedForm initialValues={initialValues} variant="outlined">
        <FormTab label="Keterangan">
          <ReferenceInput {...lingkup}>
            <SelectInput optionText={lingkup_src.fields.nama.source} />
          </ReferenceInput>
          <FormDataConsumer subscription={{ values: true }}>
            {({ formData, ...rest }) =>
              isPomdam(formData[lingkup.source]) && (
                <ReferenceInput {...jenis_pomdam} {...rest}>
                  <SelectInput
                    optionText={jenis_pomdam_src.fields.nama.source}
                  />
                </ReferenceInput>
              )
            }
          </FormDataConsumer>
          <TextInput {...nama} />
          <TextInput {...kode} />
          <FormDataConsumer subscription={{ values: true }}>
            {({ formData, ...rest }) =>
              isPomdamUmum(
                formData[lingkup.source],
                formData[jenis_pomdam.source]
              ) && <TextInput {...kode_romawi} {...rest} />
            }
          </FormDataConsumer>
        </FormTab>
        <FormTab label="Logo">
          <ImageInputBase64 {...logo} />
        </FormTab>
        <FormTab label="Stempel">
          <ImageInputBase64 {...stempel} />
        </FormTab>
      </TabbedForm>
    </Create>
  );
};

export default PenyelenggaraCreate;
