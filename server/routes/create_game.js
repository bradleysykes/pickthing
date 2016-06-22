var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
	console.log("Somebody created a new game!")
  	console.log(req.body.things_per_player);
});

router.get('/', function(req, res, next) {
	console.log("Somebody created a new game!")
  	res.end();
});

module.exports = router;