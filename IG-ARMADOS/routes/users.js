const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const {profile, profileEdit,login, loginProcess,register, registerProcess, carrito, update, remove} = require("../controllers/userController");
const registerValidator = require('../validations/registerValidator');
const upload = require('../middlewares/avatarMulter');





/* middlewares */
const checkUser = require("../middlewares/checkUser");  
const localCheck = require("../middlewares/localCheck");
const loginValidator = require("../validations/loginValidator");

router.get("/profile",localCheck, profile);  
router.get("/edit/:id", profileEdit);       

router.put("/update/:id", localCheck,update);
router.delete("/delete/:id", remove);

router.get("/login", login);
router.post("/login",loginValidator, loginProcess);

router.get("/register", register);
router.post("/register", upload.any(),registerValidator,registerProcess);

router.get('/carrito',checkUser, carrito);  



module.exports = router