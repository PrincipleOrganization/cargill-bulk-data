var mongoose = global.app.mongodb.driver;
var Schema = mongoose.Schema;

var schemaData = new Schema({
  move: {
    type: String
  },
  id_BD: {
    type: String
  },
  id_TO: {
    type: String
  },
  id_TO_conn: {
    type: String
  },
  bailor: {
    accessory: {
      type: String
    },
    name: {
      type: String
    },
    code: {
      type: String
    }
  },
  sender: {
    name: {
      type: String
    },
    code: {
      type: String
    }
  },
  carrier: {
    name: {
      type: String
    },
    code: {
      type: String
    },
    okpo: {
      type: String
    }
  },
  customer: {
    name: {
      type: String
    },
    code: {
      type: String
    }
  },
  recipient: {
    accessory: {
      type: String
    },
    name: {
      type: String
    },
    code: {
      type: String
    }
  },
  transport: {
    type: {
      type: String
    },
    number: {
      type: String
    },
    code: {
      type: String
    },
    trailer: {
      number: {
        type: String
      },
      code: {
        type: String
      }
    }
  },
  driver: {
    name: {
      type: String
    },
    certificate: {
      type: String
    },
    code: {
      type: String
    },
    phone: {
      type: String
    }
  },
  pick: {
    point: {
      _type: {
        type: String
      },
      name: {
        type: String
      },
      address: {
        type: String
      },
      code: {
        type: String
      },
      id: {
        type: String
      }
    },
    station: {
      name: {
        type: String
      },
      id: {
        type: String
      }
    }
  },
  discharge: {
    point: {
      _type: {
        type: String
      },
      name: {
        type: String
      },
      address: {
        type: String
      },
      code: {
        type: String
      },
      id: {
        type: String
      }
    },
    station: {
      name: {
        type: String
      },
      id: {
        type: String
      }
    }
  },
  weight: {
    without: {
      type: Boolean,
      default: false
    },
    gross: {
      type: Number
    },
    tara: {
      type: Number
    },
    net: {
      type: Number
    }
  },
  points: {
    first: {
      _type: {
        type: String
      },
      name: {
        type: String
      },
      address: {
        type: String
      },
      percent: {
        type: Number
      },
      humidity: {
        type: Number
      }
    },
    second: {
      _type: {
        type: String
      },
      name: {
        type: String
      },
      address: {
        type: String
      },
      percent: {
        type: Number
      },
      humidity: {
        type: Number
      }
    }
  },
  waybill: {
    number: {
      type: Number
    },
    date: {
      type: Date
    },
    barcode: {
      type: String
    },
    complex: {
      is: {
        type: Boolean
      },
      id: {
        type: String
      }
    }
  },
  dataVersion: {
    type: Date
  },
  status: {
    type: String
  }
});

module.exports = mongoose.model('Data', schemaData);
