var express = require('express');
var router = express.Router();
const {detalle} = require("../controllers/productController")


router.get("/:id",detalle);

module.exports = router;
