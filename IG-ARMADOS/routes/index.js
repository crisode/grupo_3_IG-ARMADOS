const indexController = require("../controllers/indexController")
var express = require('express');
var router = express.Router();

router.get("/", indexController.index)


module.exports = router;