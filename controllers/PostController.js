var CommentModel = require('./../models/CommentModel');
var PostModel = require('./../models/PostModel');

var PostController = {

  index: function(req, res, next) {
    PostModel.getAll(function (err, posts) {
      if (err) return console.log(err);

      res.render('posts/index', {
        posts: posts,
        auth: {
          user: req.session.user,
        },
      });
    });
  },

  create: function(req, res, next) {
    if (!req.session.user) return res.redirect('/login');

    res.render('posts/form', {
      action_url: '/posts',
      auth: {
        user: req.session.user,
      },
      errors: [],
      old: {},
    });
  },

  store: function(req, res, next) {
    if (!req.session.user) return res.redirect('/login');

    // TODO sanitization

    // check required fields are filled
    if (
      !req.body.title ||
      !req.body.content
    ) {
      return res.render('posts/form', {
        action_url: '/posts',
        auth: {
          user: req.session.user,
        },
        errors: [
          'all fields are required'
        ],
        old: req.body,
      });
    }

    let values = req.body;
    values.user_id = req.session.user.id;

    PostModel.create(function (err, post) {
      if (err) return console.log(err);

      // redirect to created post
      res.redirect('posts/'+post.id);
    }, values);
  },

  show: function(req, res, next) {
    PostModel.get(function (err, post) {
      if (err) return console.log(err);

      res.render('posts/show', {
        post: post,
        auth: {
          user: req.session.user,
        },
      });
    }, req.params.postId);
  },

  edit: function(req, res, next) {
    if (!req.session.user) return res.redirect('/login');

    PostModel.get(function (err, post) {
      if (req.session.user.id != post.user_id) return res.sendStatus(403);

      res.render('posts/form', {
        action_url: '/posts/'+post.id,
        auth: {
          user: req.session.user,
        },
        errors: [],
        old: {
          title: post.title,
          content: post.content,
        },
      });
    }, req.params.postId);
  },

  update: function(req, res, next) {
    if (!req.session.user) return res.redirect('/login');

    PostModel.get(function (err, post) {
      if (req.session.user.id != post.user_id) return res.sendStatus(403);

      // TODO sanitization

      // check required fields are filled
      if (
        !req.body.title ||
        !req.body.content
      ) {
        return res.render('posts/form', {
          action_url: '/posts/'+post.id,
          auth: {
            user: req.session.user,
          },
          errors: [
            'all fields are required'
          ],
          old: req.body,
        });
      }

      let values = req.body;

      PostModel.update(function (err, post) {
        if (err) return console.log(err);

        // redirect to updated post
        res.redirect('/posts/'+post.id);
      }, post.id, values);
    }, req.params.postId);
  },

  destroy: function(req, res, next) {
    if (!req.session.user) return res.redirect('/login');

    PostModel.get(function (err, post) {
      if (req.session.user.id != post.user_id) return res.sendStatus(403);

      PostModel.delete(function (err) {
        if (err) return console.log(err);

        res.redirect('/posts');
      }, post.id);
    }, req.params.postId);
  },

  comment: function(req, res, next) {
    if (!req.session.user) return res.redirect('/login');

    PostModel.get(function (err, post) {
      // TODO sanitization

      // check required fields are filled
      if (
        !req.body.content
      ) {
        return res.render('posts/show', {
          post: post,
          auth: {
            user: req.session.user,
          },
        });
      }

      console.log('1');
      let values = req.body;
      values.user_id = req.session.user.id;
      values.post_id = post.id;

      CommentModel.create(function (err) {
        if (err) return console.log(err);

      console.log('2');
        // redirect to commented post
        res.redirect('/posts/'+post.id);
      }, values);
    }, req.params.postId);
  },
};

module.exports = PostController;
