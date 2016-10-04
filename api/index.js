'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.json({
    api_version: 1
  });
});

router.get('/data', function(req, res) {
  var db = global.app.db;
  db.getAllData(function(docs) {
    res.json(docs);
  });
});

router.post('/data', function(req, res) {
  var db = global.app.db;
  db.addData(req.body, function(err, rec) {
    if (err) {
      res.send(err);
    } else {
      res.json(rec);
    }
  });
});

module.exports = router;
