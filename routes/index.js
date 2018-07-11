var express = require('express');
var router = express.Router();

var bcrypt = require('bcrypt');

var usersManager = require('./../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'my blog',
    auth: {
      user: req.session.user,
    },
  });
});

router.get('/login', function(req, res, next) {
  if (req.session.user) return res.redirect('/');

  res.render('login', {
    auth: {},
    errors: [],
    old: {},
  });
});

router.post('/login', function(req, res, next) {
  if (req.session.user) return res.redirect('/');

  if (
    !req.body.email ||
    !req.body.password
  ) {
    return res.render('login', {
      auth: {},
      errors: [
        'all fields are required'
      ],
      old: req.body,
    });
  }

  usersManager.getByEmail(function (err, user) {
    if (err) return console.log(err);

    bcrypt.compare(req.body.password, user.password, function (err, ok) {
      if (err) return console.log(err);

      if (ok) {
        req.session.user = user;

        res.redirect('users/'+user.id);
      } else {
        return res.render('login', {
          auth: {},
          errors: [
            'password is wrong'
          ],
          old: req.body,
        });
      }
    });
  }, req.body.email);
});

router.get('/logout', function(req, res, next) {
  req.session.user = null;
  res.redirect('/');
});

router.get('/register', function(req, res, next) {
  if (req.session.user) return res.redirect('/');

  res.render('register', {
    auth: {},
    errors: [],
    old: {},
  });
});

router.post('/register', function(req, res, next) {
  if (req.session.user) return res.redirect('/');

  // TODO sanitization

  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.password
  ) {
    return res.render('register', {
      auth: {},
      errors: [
        'all fields are required'
      ],
      old: req.body,
    });
  }

  if (req.body.password !== req.body.confirm_password) {
    return res.render('register', {
      auth: {},
      errors: [
        'passwords don\'t match'
      ],
      old: req.body,
    });
  }

  usersManager.getByEmail(function (err, user) {
    if (err) return console.log(err);

    if (user) {
      return res.render('register', {
        auth: {},
        errors: [
          'email already used'
        ],
        old: req.body,
      });
    }

    bcrypt.hash(req.body.password, 10, function (err, hash) {
      req.body.hash = hash;

      usersManager.create(function (err, user) {
        if (err) return console.log(err);

        req.session.user = user;

        res.redirect('users/'+user.id);
      }, req.body);
    });
  }, req.body.email);
});

module.exports = router;
