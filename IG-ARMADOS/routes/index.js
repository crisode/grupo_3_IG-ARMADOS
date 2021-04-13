const { index, contact,suscripcion,agradecimiento } = require('../controllers/indexController');
var express = require('express');
var router = express.Router();
const localCheck = require("../middlewares/localCheck");

router.get("/", localCheck,index);
router.get("/contact", contact);
router.post("/suscripcion", suscripcion);
router.get("/agradecimiento", agradecimiento)



module.exports = router;