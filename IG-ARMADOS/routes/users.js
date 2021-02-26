const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const {profile, profileEdit,login, loginProcess,register, registerProcess, carrito} = require("../controllers/userController");
const registerValidator = require('../validations/registerValidator');
const upload = require('../middlewares/avatarMulter');




/* middlewares */
const checkUser = require("../middlewares/checkUser");  

router.get("/profile", profile);  
router.get("/edit", profileEdit);         

router.get("/login", login);
router.post("/login", loginProcess);

router.get("/register", register);
router.post("/register", upload.any(),registerValidator,registerProcess);

router.get('/carrito',checkUser, carrito);  



module.exports = router