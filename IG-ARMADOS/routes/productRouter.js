var express = require('express');
var router = express.Router();
const {detalle, busqueda,carrito,} = require("../controllers/productController")


router.get('/search', busqueda);
router.get('/:id',detalle);




module.exports = router;
