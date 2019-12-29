import SimCreate from "./components/SimCreate";

const identities = {
  name: "sim",
  options: {
    label: "SIM"
  },
  create: SimCreate
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
  }
};

export default { identities, fields, components };
