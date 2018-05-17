var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Meu Primeiro WebApp Incrível', status: 'de boa' });
});

/* GET Helicopterson bio. */
router.get('/helicopterson', function(req, res, next) {
  res.render('bio');
});

module.exports = router;
