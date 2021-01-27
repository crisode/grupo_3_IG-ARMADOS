const carritoController = require("../controllers/carritoController")
var express = require('express');
var router = express.Router();

router.get("/", carritoController.index)


module.exports = router;