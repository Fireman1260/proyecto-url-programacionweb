var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('{"hello": '+req.query.name+'}');
});

module.exports = router;
