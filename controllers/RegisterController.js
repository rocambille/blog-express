var bcrypt = require('bcrypt');

var UserModel = require('./../models/UserModel');

var RegisterController = {

  showRegisterForm: function(req, res, next) {
    if (req.session.user) return res.redirect('/');

    res.render('register', {
      auth: {},
      errors: [],
      old: {},
    });
  },

  /*
  * handle login form submision
  */
  register: function(req, res, next) {
    if (req.session.user) return res.redirect('/');

    // TODO sanitization

    // check required fields are filled
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

    // double check password
    if (req.body.password !== req.body.confirm_password) {
      return res.render('register', {
        auth: {},
        errors: [
          'passwords don\'t match'
        ],
        old: req.body,
      });
    }

    // get the user for the given email (should be null)
    UserModel.getByEmail(function (err, user) {
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

      // hash the password using bcrypt
      bcrypt.hash(req.body.password, 10, function (err, hash) {
        req.body.hash = hash;

        // create the user through the model
        UserModel.create(function (err, user) {
          if (err) return console.log(err);

          // store the user in the session = login
          req.session.user = user;

          // redirect to user's homepage
          res.redirect('users/'+user.id);
        }, req.body);
      });
    }, req.body.email);
  },
};

module.exports = RegisterController;
