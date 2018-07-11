var express = require('express');
var router = express.Router();

var usersManager = require('./../models/users');

/* index */
router.get('/', function(req, res, next) {
  usersManager.getAll(function (err, users) {
    if (err) return console.log(err);

    res.render('users/index', {
      users: users,
      auth: {
        user: req.session.user,
      },
    });
  });
});

/* show */
router.get('/:userId', function(req, res, next) {
  usersManager.get(function (err, user) {
    if (err) return console.log(err);

    res.render('users/show', {
      user: user,
      auth: {
        user: req.session.user,
      },
    });
  }, req.params.userId);
});

module.exports = router;
