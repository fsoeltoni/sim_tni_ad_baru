import LingkupCreate from "./components/LingkupCreate";
import LingkupList from "./components/LingkupList";

const identities = {
  name: "lingkup",
  options: {
    label: "Lingkup"
  },
  create: LingkupCreate,
  list: LingkupList
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
