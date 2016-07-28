'use strict';

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var dbConfig = require('./config/db');
var MongoClient = require('mongodb').MongoClient;

var routesMain = require('./routes/index');
var routesApi = require('./routes/api');

var port = process.env.PORT || 8080;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routesMain);
app.use('/api', routesApi);

// catch 404 and forward to error handler
app.use(function(req, res) {
  res.sendStatus(404);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// if connect to mongodb success:
// - pass connection to app
// - app listen on port
MongoClient.connect(dbConfig.url, function(err, db) {
  if (err) throw err;
  app.set('db', db);
  app.listen(port);
  console.log('App listening on port ' + port);
});
