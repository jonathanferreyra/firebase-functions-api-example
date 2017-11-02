var models  = require('../models');
var express = require('express');
var router  = express.Router();
// var faker = require('faker');


// router.get('/insert', function(req, res) {
//   rows = 50;
//   for (var i = 1; i < rows; i++) {
//     console.log('inserting', i)
//     models.User.create({
//       name: faker.name.findName(),
//       address: faker.address.streetAddress(),
//       country: faker.address.country(),
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//     })
//   }
//   res.json({})
// })

// Get all
router.get('/', function(req, res) {
  models.User.all().then(function (users) {
    res.json(users)
  });
});

// Search
router.get('/search', function(req, res) {
  let fields = ['name', 'address', 'country', 'username', 'email'];

  // build query
  let query = {}
  for (let key in req.query) {
    if (fields.indexOf(key) != -1){
      let value = req.query[key]
      query[key] = {$like: '%' + value + '%'}
    }
  }

  models.User.findAndCountAll({where: query}).then(function (users) {
    res.json(users)
  });
});

// Get one
router.get('/:user_id', function(req, res) {
  models.User.findById(req.params.user_id).then(function(user){
    res.json(user);
  });
});

// Create new
router.post('/', function(req, res) {
  models.User.create({
    name: req.body.name,
    address: req.body.address,
    country: req.body.country,
    username: req.body.username,
    email: req.body.email,
  }, {
    fields: ['name', 'address', 'country', 'username', 'email']
  }).then(function(user) {
    res.json(user);
  });
});

// Delete one
router.post('/:user_id', function(req, res) {
  models.User.findById(req.params.user_id)
    .then(function() {
      res.json({ message: 'user destroyed' });
    });
});


module.exports = router;
