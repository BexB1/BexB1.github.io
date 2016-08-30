var express = require('express');
var router = express.Router();
var appController = require('../controllers/appcontroller');

router.route('/')
  .get(appController.index);

module.exports = router;