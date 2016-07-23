var MongoDB = function(config) {
  this.config = config;
  this.driver = require('mongoose');
  this.models = {data: null};
}

MongoDB.prototype.start = function( cb) {
  var self = this;

  var host = self.config.host;
  var port = self.config.port;
  var base = self.config.base;

  var connString = `mongodb://${host}:${port}/${base}`;
  self.driver.connect(connString);

  self.connection = self.driver.connection;

  self.connection.on('error', console.error.bind(console, 'connection error:'));

  self.connection.once('open', function() {
    self.models.data = require('./models/data.js');

    console.log(`Connected to DB on ${host}:${port}/${base}`);

    cb();
  });
}

MongoDB.prototype.addToData = function(obj, cb) {
  var self = this;
  var Data = self.models.data;
  Data.create(obj, function(err, rec) {
    if (cb) {
      cb(err, rec);
    }
  });
}

MongoDB.prototype.getData = function(params, cb) {
  var self = this;
  var Data = self.models.data;
  Data.find(params, function(err, docs) {
    if (cb) {
      cb(err, docs);
    }
  });
}

exports = module.exports = MongoDB;
