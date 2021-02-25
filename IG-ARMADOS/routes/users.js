const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const {profile,login, loginProcess,register, registerProcess, carrito} = require("../controllers/userController");




/* middlewares */
const checkUser = require("../middlewares/checkUser");  

router.get("/profile",checkUser, profile);           

router.get("/login", login);
router.post("/login", loginProcess);

router.get("/register", register);
router.post("/register", registerProcess);

router.get('/carrito',checkUser, carrito);  



module.exports = router