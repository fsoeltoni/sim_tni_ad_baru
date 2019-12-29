import JenisPomdamCreate from "./components/JenisPomdamCreate";
import JenisPomdamList from "./components/JenisPomdamList";

const identities = {
  name: "jenis_pomdam",
  options: {
    label: "Jenis Pomdam"
  },
  create: JenisPomdamCreate,
  list: JenisPomdamList
};

const fields = {
  id: {
    source: "id",
    label: "Id"
  },
  nama: {
    source: "nama",
    label: "Nama"
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
  }
};

export default { identities, fields, components };
