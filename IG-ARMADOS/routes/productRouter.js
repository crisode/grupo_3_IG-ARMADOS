var express = require('express');
var router = express.Router();
const {detalle, busqueda,carrito,productByComponent} = require("../controllers/productController")


router.get('/search', busqueda);
router.get('/component/:id', productByComponent)
router.get('/:id',detalle);




module.exports = router;
