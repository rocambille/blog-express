let db = require('./../db');

let CommentModel = require('./CommentModel');

let PostModel = {
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

      let post = rows[0];

      CommentModel.getAllByPost(function (err, rows) {
        if (err) return cb(err);

        post.comments = rows;

        return cb(null, post);
      }, post.id);
    });
  },
  create: function (cb, values) {
    let query_string = 'INSERT INTO `posts`(`title`, `content`, `user_id`) VALUES (' +
      '\'' + values.title + '\', ' +
      '\'' + values.content + '\', ' +
      '\'' + values.user_id + '\')';

    db.query(query_string, function (err, rows, fields) {
      if (err) return cb(err);

      // TODO use timestamps

      let query_string = 'SELECT * FROM posts ORDER BY id DESC LIMIT 1';

      db.query(query_string, function (err, rows, fields) {
        if (err) return cb(err);

        return cb(null, rows[0]);
      });
    });
  },
  update: function (cb, id, values) {
    let query_string = 'UPDATE `posts` SET ' +
      '`title`=\'' + values.title + '\', ' +
      '`content`=\'' + values.content + '\'' +
      ' WHERE `id`=' + id;

    db.query(query_string, function (err, rows, fields) {
      if (err) return cb(err);

      return PostModel.get(cb, id);
    });
  },
  delete: function (cb, id) {
    let query_string = 'DELETE FROM `posts` WHERE `id`=' + id;

    db.query(query_string, function (err, rows, fields) {
      if (err) return cb(err);

      return cb(null);
    });
  },
}

module.exports = PostModel;
