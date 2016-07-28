'use strict';

var express = require('express');
var router = express.Router();

/* GET all titles. */
router.get('/titles', function(req, res) {
  var collection = req.app.get('db').collection("Titles");
  collection.find({}).toArray(function(err, docs) {
    if (err) res.send(err);
    res.json(docs);
  });
});

module.exports = router;
