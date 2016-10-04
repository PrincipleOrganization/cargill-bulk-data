'use strict';

var Express = require('../express');
var ConfigReader = require('../config');
var RethinkDB = require('../rethinkdb');

class Application {
  constructor() {
    this.express = new Express();
    this.server = null;
    this.config = new ConfigReader();
    this.db = new RethinkDB(this.config.getDBConfig());
  }

  startServer() {
    var self = this;
    this.db.getReady(() => {
      var port = self.config.getServerPort();

      self.express.app.set('port', port);

      self.server = self.express.app.listen(port, function() {
        console.log('Server listening on port ' + port);
      });
    });
  }
}

exports = module.exports = Application;
