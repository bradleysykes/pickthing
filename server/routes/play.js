var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('play', { title: 'Play a game' });
});

module.exports = router;