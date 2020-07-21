var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-control-Allow-Headers", "xCors");    //允许请求头中携带 xCors
	res.send('respond with a resource');
});
router.get('/m', function(req, res, next) {
  res.send('respond with a resource m');
});

module.exports = router;
