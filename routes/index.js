var express = require('express');
var router = express.Router();
var configs = require('../config.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express', API_KEY:configs.api });
});

module.exports = router;
