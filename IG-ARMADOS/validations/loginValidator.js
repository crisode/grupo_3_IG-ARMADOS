const {check} = require("express-validator");

module.exports = [
    check("email")
    .notEmpty()
    .withMessage("Campo requerido"),
    
    check("email")
    .isEmail()
    .withMessage("Formato no válido"),

    check("pass")
    .notEmpty()
    .withMessage("Campo requerido")
]