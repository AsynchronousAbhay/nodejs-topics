var express = require('express');
var router = express.Router();

const path = require("path");
const fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  const files = fs.readdirSync(
    path.join(__dirname, "..", "public", "Filesystem"),
  )

  res.render('index', { files });
});

router.get('/file/:filename', function(req, res, next) {
  const filedata = fs.readFileSync(
    path.join(__dirname, "..", "public", "Filesystem", req.params.filename),
    'utf-8'
  )

  res.send(filedata);
});

router.post('/create', function(req, res, next) {
  fs.writeFileSync(
    path.join(__dirname, "..", "public", "Filesystem", req.body.filename),
    "heloo world!!"
  )
  res.redirect("/")
});

module.exports = router;
