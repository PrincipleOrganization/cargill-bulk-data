var mongoose = global.app.db.driver;
var Schema = mongoose.Schema;

var schemaData = new Schema({
  move: {
    type: String,
    default: ''
  },
  id_BD: {
    type: String,
    default: ''
  },
  id_TO: {
    type: String,
    default: ''
  },
  id_TO_conn: {
    type: String,
    default: ''
  },
  bailor: {
    accessory: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    code: {
      type: String,
      default: ''
    }
  },
  sender: {
    name: {
      type: String,
      default: ''
    },
    code: {
      type: String,
      default: ''
    }
  },
  carrier: {
    name: {
      type: String,
      default: ''
    },
    code: {
      type: String,
      default: ''
    },
    okpo: {
      type: String,
      default: ''
    }
  },
  customer: {
    name: {
      type: String,
      default: ''
    },
    code: {
      type: String,

    }
  },
  recipient: {
    accessory: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    code: {
      type: String,
      default: ''
    }
  },
  transport: {
    type: {
      type: String,
      default: ''
    },
    number: {
      type: String,
      default: ''
    },
    code: {
      type: String,
      default: ''
    },
    trailer: {
      number: {
        type: String,
        default: ''
      },
      code: {
        type: String,
        default: ''
      }
    }
  },
  driver: {
    name: {
      type: String,
      default: ''
    },
    certificate: {
      type: String,
      default: ''
    },
    code: {
      type: String,
      default: ''
    },
    phone: {
      type: String,
      default: ''
    }
  },
  pick: {
    point: {
      _type: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      },
      address: {
        type: String,
        default: ''
      },
      code: {
        type: String,
        default: ''
      },
      id: {
        type: String,
        default: ''
      }
    },
    station: {
      name: {
        type: String,
        default: ''
      },
      id: {
        type: String,
        default: ''
      }
    }
  },
  discharge: {
    point: {
      _type: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      },
      address: {
        type: String,
        default: ''
      },
      code: {
        type: String,
        default: ''
      },
      id: {
        type: String,
        default: ''
      }
    },
    station: {
      name: {
        type: String,
        default: ''
      },
      id: {
        type: String,
        default: ''
      }
    }
  },
  weight: {
    without: {
      type: Boolean,
      default: false
    },
    gross: {
      type: Number,
      default: 0
    },
    tara: {
      type: Number,
      default: 0
    },
    net: {
      type: Number,
      default: 0
    }
  },
  points: {
    first: {
      _type: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      },
      address: {
        type: String,
        default: ''
      },
      percent: {
        type: Number,
        default: 0
      },
      humidity: {
        type: Number,
        default: 0
      }
    },
    second: {
      _type: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      },
      address: {
        type: String,
        default: ''
      },
      percent: {
        type: Number,
        default: 0
      },
      humidity: {
        type: Number,
        default: 0
      }
    }
  },
  waybill: {
    number: {
      type: String,
      default: ''
    },
    date: {
      type: Date,
      default: new Date()
    },
    barcode: {
      type: String,
      default: ''
    },
    complex: {
      is: {
        type: Boolean
      },
      id: {
        type: String,
        default: ''
      }
    }
  },
  dataVersion: {
    type: Date,
    default: new Date()
  },
  status: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('Data', schemaData);
