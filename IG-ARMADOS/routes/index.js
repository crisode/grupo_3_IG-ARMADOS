const { index, contact } = require('../controllers/indexController');
var express = require('express');
var router = express.Router();

router.get("/", index);
router.get("/contact", contact);



module.exports = router;