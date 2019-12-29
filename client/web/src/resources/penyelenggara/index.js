import PenyelenggaraCreate from "./components/PenyelenggaraCreate";
import PenyelenggaraList from "./components/PenyelenggaraList";
import lingkup from "../lingkup";
import jenis_pomdam from "../jenis_pomdam";
import PenyelenggaraEdit from "./components/PenyelenggaraEdit";

const identities = {
  name: "penyelenggara",
  options: {
    label: "Penyelenggara"
  },
  create: PenyelenggaraCreate,
  list: PenyelenggaraList,
  edit: PenyelenggaraEdit
};

const fields = {
  id: {
    source: "id",
    label: "Id"
  },
  lingkup: {
    source: lingkup.identities.name + "_id",
    label: lingkup.identities.options.label,
    reference: lingkup.identities.name,
    sort: {
      field: lingkup.fields.id.source,
      order: "ASC"
    }
  },
  jenis_pomdam: {
    source: jenis_pomdam.identities.name + "_id",
    label: jenis_pomdam.identities.options.label,
    reference: jenis_pomdam.identities.name,
    sort: {
      field: jenis_pomdam.fields.id.source,
      order: "ASC"
    }
  },
  nama: {
    source: "nama",
    label: "Nama"
  },
  kode: {
    source: "kode",
    label: "Kode"
  },
  kode_romawi: {
    source: "kode_romawi",
    label: "Kode Romawi"
  },
  logo: {
    source: "logo",
    label: "Logo",
    accept: "image/*",
    placeholder: "Pilih logo"
  },
  stempel: {
    source: "stempel",
    label: "Stempel",
    accept: "image/*",
    placeholder: "Pilih stempel"
  },
  created: {
    source: "created",
    label: "Created"
  },
  updated: {
    source: "updated",
    label: "Updated"
  }
};

const components = {
  create: {
    title: "Tambah " + identities.options.label
  },
  list: {
    title: "Daftar " + identities.options.label,
    sort: {
      fields: fields.created,
      order: "ASC"
    }
  },
  edit: {
    title: "Ubah " + identities.options.label
  }
};

export default { identities, fields, components };
