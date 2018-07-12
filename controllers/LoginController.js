var bcrypt = require('bcrypt');

var UserModel = require('./../models/UserModel');

var LoginController = {

  showLoginForm: function(req, res, next) {
    if (req.session.user) return res.redirect('/');

    res.render('login', {
      auth: {},
      errors: [],
      old: {},
    });
  },

  /*
  * handle login form submision
  */
  login: function(req, res, next) {
    if (req.session.user) return res.redirect('/');

    // check required fields are filled
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

    // get the user for the given email
    UserModel.getByEmail(function (err, user) {
      if (err) return console.log(err);

      if (!user) {
        return res.render('login', {
          auth: {},
          errors: [
            'unknown email'
          ],
          old: req.body,
        });
      }

      // compare the given password with the password of the user
      bcrypt.compare(req.body.password, user.password, function (err, ok) {
        if (err) return console.log(err);

        if (ok) {
          // store the user in the session
          req.session.user = user;

          // redirect to user's homepage
          res.redirect('users/'+user.id);
        } else {
          // no math: rerender the login form
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
  },

  logout: function(req, res, next) {
    // clear any user in the session
    req.session.user = null;
    // redirect to homepage
    res.redirect('/');
  },
};

module.exports = LoginController;
