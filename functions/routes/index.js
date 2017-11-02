var path   = require("path");
var models = require('../models');
var router = require('express').Router();
var users  = require('../routes/users');


router.get('/', function(req, res) {
  res.status(200).json({ message : 'Wellcome to the API'});
});

router.get('/getdb', function(req, res) {
  // TODO: add security here
  res.sendFile(path.join(__dirname, '..', 'db.sqlite'))
});

router.get('*', function(req, res) {
  res.json({err: 'not found'})
});

module.exports = function(app) {
  app.use('/users', users);
  app.use('/', router);
};