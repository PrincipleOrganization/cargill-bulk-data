'use strict';

class RethinkDB {
  constructor(configuration) {
    this.thinky = require('thinky')(configuration);
    this.models = {Data: null};
  }

  getReady(callback) {
    let self = this;
    this.thinky.dbReady().then(() => {
      self.models.Data = require('./models/data');

      if (callback) {
        callback(true);
      }
    });
  }

  getAllData(callback) {
    let Data = this.models.Data;
    Data.getAll((documents) => {
      if (callback) {
        callback(documents);
      }
    });
  }

  addData(obj, callback) {
    let Data = this.models.Data;
    Data.new(obj, (error, result) => {
      callback(error, result);
    });
  }
}

exports = module.exports = RethinkDB;
