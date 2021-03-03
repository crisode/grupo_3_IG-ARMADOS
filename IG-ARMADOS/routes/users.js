const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const {profile, profileEdit,login, loginProcess,register, registerProcess, carrito, update, remove, logout} = require("../controllers/userController");
const registerValidator = require('../validations/registerValidator');
const upload = require('../middlewares/avatarMulter');





/* middlewares */
const checkUser = require("../middlewares/checkUser");  

const loginValidator = require("../validations/loginValidator");

router.get("/profile", profile);  
router.get("/edit/:id", profileEdit);       

router.put("/update/:id", upload.any(), update);
router.delete("/delete/:id", remove);

router.get("/login", login);
router.post("/login",loginValidator, loginProcess);

router.get("/register", register);
router.post("/register", upload.any(),registerValidator,registerProcess);

router.get('/carrito',checkUser, carrito);  

router.get("/logout", logout);



module.exports = router