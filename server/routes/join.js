var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('join', { title: 'Join a game' });
});

module.exports = router;