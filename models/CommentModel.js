let db = require('./../db');

let CommentModel = {
  getAllByPost: function (cb, post_id) {
    let query_string = 'SELECT * FROM comments WHERE post_id=' + post_id;

    db.query(query_string, function (err, rows, fields) {
      if (err) return cb(err);

      return cb(null, rows);
    });
  },
  create: function (cb, values) {
    let query_string = 'INSERT INTO `comments`(`content`, `user_id`, `post_id`) VALUES (' +
      '\'' + values.content + '\', ' +
      '\'' + values.user_id + '\', ' +
      '\'' + values.post_id + '\')';

    db.query(query_string, function (err, rows, fields) {
      if (err) return cb(err);

      return cb(null);
    });
  },
}

module.exports = CommentModel;
