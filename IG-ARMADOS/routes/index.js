const { index, contact } = require('../controllers/indexController');
var express = require('express');
var router = express.Router();
const localCheck = require("../middlewares/localCheck");

router.get("/", localCheck,index);
router.get("/contact", contact);



module.exports = router;