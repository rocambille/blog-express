let db = require('./../db');

let postsManager = {
  getAll: function (cb) {
    let query_string = 'SELECT * FROM posts';

    db.query(query_string, function (err, rows, fields) {
      if (err) return cb(err);

      return cb(null, rows);
    });
  },
  get: function (cb, id) {
    let query_string = 'SELECT * FROM posts WHERE id=' + id;

    db.query(query_string, function (err, rows, fields) {
      if (err) return cb(err);

      return cb(null, rows[0]);
    });
  },
}

module.exports = postsManager;
