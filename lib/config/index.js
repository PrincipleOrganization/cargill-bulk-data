var config = require('../../config.json');

var ConfigReader = function() {
  this.config = config;
}

ConfigReader.prototype.getServerPort = function() {
  return this.config.server.port;
}

ConfigReader.prototype.getDBConfig = function() {
  return this.config.db;
}

exports = module.exports = ConfigReader;
