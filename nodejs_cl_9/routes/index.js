var express = require('express');
var router = express.Router();

const fs = require("fs");
const path = require("path");


/* GET home page. */
router.get('/', function (req, res, next) {
  const files = fs.readdirSync(
    path.join(__dirname, "..", "public", "Filesystem")
  )

  res.render('index', { files, filedata: null, filename:null });
});

router.get('/file/:filename', function (req, res, next) {
  const files = fs.readdirSync(
    path.join(__dirname, "..", "public", "Filesystem")
  )

  const filedata = fs.readFileSync(
    path.join(__dirname, "..", "public", "Filesystem", req.params.filename),
    "utf-8"
  );

  res.render('index', { files, filedata, filename: req.params.filename });
});

router.post('/create', function (req, res, next) {
  fs.writeFileSync(
    path.join(__dirname, "..", "public", "Filesystem", req.body.filename),
    "hello world!!!"
  );

  res.redirect("/file/"+req.body.filename);
});

router.get('/delete/:filename', function (req, res, next) {
  fs.unlinkSync(
    path.join(__dirname, "..", "public", "Filesystem", req.params.filename),
  );

  res.redirect("/");
});



module.exports = router;
