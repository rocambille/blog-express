var express = require('express');
var router = express.Router();

var bcrypt = require('bcrypt');

var LoginController = require('./../controllers/LoginController');
var RegisterController = require('./../controllers/RegisterController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'my blog',
    auth: {
      user: req.session.user,
    },
  });
});

router.get(
  '/login', LoginController.showLoginForm
);
router.post(
  '/login', LoginController.login
);
router.get(
  '/logout', LoginController.logout
);

router.get(
  '/register', RegisterController.showRegisterForm
);
router.post(
  '/register', RegisterController.register
);

module.exports = router;
