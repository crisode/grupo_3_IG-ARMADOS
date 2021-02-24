const express = require("express");
const router = express.Router();
const {profile,login, loginProcess,register, registerProcess, carrito} = require("../controllers/userController")

router.get("/profile", profile)

router.get("/login", login);
router.post("/login", loginProcess);

router.get("/register", register);
router.post("/register", registerProcess);

router.get('/carrito', carrito);



module.exports = router