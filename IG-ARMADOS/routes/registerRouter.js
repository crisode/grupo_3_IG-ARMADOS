const express = require("express");
const router = express.Router();
const {register, registerProcess} = require("../controllers/registerController")

router.get("/", register);
router.post("/login", registerProcess);

module.exports = router