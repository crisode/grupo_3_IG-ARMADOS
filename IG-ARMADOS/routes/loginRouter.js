const express = require("express");
const router = express.Router();
const {login, loginProcess} = require("../controllers/loginController")

router.get("/", login);
router.post("/login", loginProcess);

module.exports = router