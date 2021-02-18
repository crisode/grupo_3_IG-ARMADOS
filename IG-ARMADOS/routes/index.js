const { index } = require('../controllers/indexController');
var express = require('express');
var router = express.Router();

router.get("/", index);


module.exports = router;