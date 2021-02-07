const adminController = require("../controllers/adminController")
var express = require('express');
var router = express.Router();

router.get("/", adminController.cargaProducto)


module.exports = router;