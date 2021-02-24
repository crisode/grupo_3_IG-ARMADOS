var express = require('express');
var router = express.Router();
const {detalle, carrito} = require("../controllers/productController")


router.get('/:id',detalle);

module.exports = router;
