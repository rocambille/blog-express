let db = require('./../db');

let UserModel = {
  getAll: function (cb) {
    let query_string = 'SELECT * FROM users';

    db.query(query_string, function (err, rows, fields) {
      if (err) return cb(err);

      return cb(null, rows);
    });
  },
  get: function (cb, id) {
    let query_string = 'SELECT * FROM users WHERE id=' + id;

    db.query(query_string, function (err, rows, fields) {
      if (err) return cb(err);

      return cb(null, rows[0]);
    });
  },
  getByEmail: function (cb, email) {
    let query_string = 'SELECT * FROM users WHERE email=\'' + email + '\'';

    db.query(query_string, function (err, rows, fields) {
      if (err) return cb(err);

      return cb(null, rows[0]);
    });
  },
  create: function (cb, values) {
    let query_string = 'INSERT INTO `users`(`name`, `email`, `password`) VALUES (' +
      '\'' + values.name + '\', ' +
      '\'' + values.email + '\', ' +
      '\'' + values.hash + '\')';

    db.query(query_string, function (err, rows, fields) {
      if (err) return cb(err);

      UserModel.getByEmail(cb, values.email);
    });
  },
}

module.exports = UserModel;
