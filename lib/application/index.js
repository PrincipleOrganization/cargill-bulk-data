var Express = require('../express');
var ConfigReader = require('../config');
var MongoDB = require('../mongodb');

var Application = function() {
  this.express = new Express();
  this.server = null;
  this.config = new ConfigReader();
  this.mongodb = new MongoDB(this.config.getDBConfig());
}

Application.prototype.startServer = function() {
  var self = this;
  self.mongodb.start(function() {
    var port = self.config.getServerPort();

    self.express.app.set('port', port);

    self.server = self.express.app.listen(port, function() {
      console.log('Server listening on port ' + port);
    });
  });
}


exports = module.exports = Application;
