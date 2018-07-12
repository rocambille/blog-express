var express = require('express');
var router = express.Router();

var PostController = require('./../controllers/PostController');

router.get(
  '/',
  PostController.index
);
router.get(
  '/create',
  PostController.create
);
router.post(
  '/',
  PostController.store
);
router.get(
  '/:postId',
  PostController.show
);
router.get(
  '/:postId/edit',
  PostController.edit
);
router.post(
  '/:postId',
  PostController.update
);
router.delete(
  '/:postId',
  PostController.destroy
);
router.post(
  '/:postId/comment',
  PostController.comment
);

module.exports = router;
