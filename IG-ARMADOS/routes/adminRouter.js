var express = require('express');
var router = express.Router();
const {index, cargaProducto} = require("../controllers/adminController")

router.get("/", index);
router.get("/create", cargaProducto)

module.exports = router;