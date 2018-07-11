var express = require('express');
var router = express.Router();

var postsManager = require('./../models/posts');

/* index */
router.get('/', function(req, res, next) {
  postsManager.getAll(function (err, posts) {
    if (err) return console.log(err);

    res.render('posts/index', {
      posts: posts,
      auth: {
        user: req.session.user,
      },
    });
  });
});

/* create */
router.get('/create', function(req, res, next) {
  res.send('respond with a resource');
});

/* store */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* show */
router.get('/:postId', function(req, res, next) {
  postsManager.get(function (err, post) {
    if (err) return console.log(err);

    res.render('posts/show', {
      post: post,
      auth: {
        user: req.session.user,
      },
    });
  }, req.params.postId);
});

/* edit */
router.get('/:postId/edit', function(req, res, next) {
  res.send('respond with a resource');
});

/* update */
router.post('/:postId', function(req, res, next) {
  res.send('respond with a resource');
});

/* destroy */
router.delete('/:postId', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
