var express = require('express');
var router = express.Router();

var UserController = require('./../controllers/UserController');

router.get(
  '/',
  UserController.index
);
router.get(
  '/:userId',
  UserController.show
);

module.exports = router;
