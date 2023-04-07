var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',);
});

router.get('/signup', function(req, res, next) {
  res.send(req.query);
});

router.post('/signup', function(req, res, next) {
  res.send(req.body);
});
module.exports = router;
