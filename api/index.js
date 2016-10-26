'use strict';

var express = require('express');
var router = express.Router();

router.get('/data', function(req, res) {
  var db = global.app.db;
  db.getData(req.query, function(err, docs) {
    if (err) {
      next();
    }
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
