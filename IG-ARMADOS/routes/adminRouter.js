const adminController = require("../controllers/adminController")
var express = require('express');
var router = express.Router();

router.get("/carga", adminController.cargaProducto)


module.exports = router;