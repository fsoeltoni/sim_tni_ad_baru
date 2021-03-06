import SimCreate from "./components/SimCreate";
import SimList from "./components/SimList";

const identities = {
  name: "sim",
  options: {
    label: "SIM"
  },
  create: SimCreate,
  list: SimList
};

const fields = {
  id: {
    source: "id",
    label: "Id"
  },
  pada_tanggal: {
    source: "pada_tanggal",
    label: "Pada Tanggal"
  },
  berlaku_hingga: {
    source: "berlaku_hingga",
    label: "Berlaku Hingga"
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
