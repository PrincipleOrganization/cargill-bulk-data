'use strict';

const db = global.app.db;
const thinky = db.thinky;
const type = thinky.type;

let Data = thinky.createModel("Data", {
  move: type.string(),
  id_BD: type.string(),
  id_TO: type.string(),
  id_TO_conn: type.string(),
  bailor: {
    accessory: type.string(),
    name: type.string(),
    code: type.string()
  },
  sender: {
    name: type.string(),
    code: type.string()
  },
  carrier: {
    name: type.string(),
    code: type.string(),
    okpo: type.string()
  },
  customer: {
    name: type.string(),
    code: type.string()
  },
  recipient: {
    accessory: type.string(),
    name: type.string(),
    code: type.string()
  },
  transport: {
    type: type.string(),
    number: type.string(),
    code: type.string(),
    trailer: {
      number: type.string(),
      code: type.string()
    }
  },
  driver: {
    name: type.string(),
    certificate: type.string(),
    code: type.string(),
    phone: type.string()
  },
  pick: {
    point: {
      type: type.string(),
      name: type.string(),
      address: type.string(),
      code: type.string(),
      id: type.string()
    },
    station: {
      name: type.string(),
      id: type.string()
    }
  },
  discharge: {
    point: {
      type: type.string(),
      name: type.string(),
      address: type.string(),
      code: type.string(),
      id: type.string()
    },
    station: {
      name: type.string(),
      id: type.string()
    }
  },
  weight: {
    without: type.boolean().default(false),
    gross: type.number(),
    tara: type.number(),
    net: type.number()
  },
  points: {
    first: {
      type: type.string(),
      name: type.string(),
      address: type.string(),
      percent: type.number(),
      humidity: type.number()
    },
    second: {
      type: type.string(),
      name: type.string(),
      address: type.string(),
      percent: type.number(),
      humidity: type.number()
    }
  },
  waybill: {
    number: type.number(),
    date: type.date(),
    barcode: type.string(),
    complex: {
      is: type.boolean(),
      id: type.string()
    }
  },
  dataVersion: type.date(),
  status: type.string()
});

Data.defineStatic('getAll', (callback) => {
  Data.run().then(function(records) {
    if (callback) {
      if (records) {
        callback(records);
      } else {
        callback([]);
      }
    }
  });
});

Data.defineStatic('new', (obj, callback) => {
  const _obj = {};
  Object.assign(_obj, obj)
  let data = new Data(_obj);
  data.save().then((rec) => {
    if (callback) {
      callback(null, rec);
    }
  }).error((err) => {
    if (callback) {
      callback(err, null);
    }
  });
});

module.exports = Data;
