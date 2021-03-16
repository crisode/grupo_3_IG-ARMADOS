const {check, body}= require ("express-validator");
const db = require("../database/models")


module.exports= [
    check('name')
    .notEmpty()
    .withMessage('Nombre requerido'),
    check('apellido')
    .notEmpty()
    .withMessage('apellido requerido'),

    check('email')
    .isEmail()
    .withMessage('email invalido'),

    body('email').custom((value) => {
        
        return db.Users.findOne({
            where : {
                email : value
            }
        })
        .then(user => {
            if(user){
                return Promise.reject('Este email ya está registrado')
            }
        })
    }).withMessage('Email ya registrado'),
        
    check("pass")
    .isLength({
        min : 6,
        max : 12
    }).withMessage('La contraseña debe tener entre 6 a 12 caracteres'),

    body('pass').custom((value,{req}) => {
        if(value != req.body.pass2){
            return false
        }else{
            return true
        }
    }).withMessage('Las contraseñas no coinciden'),

    body('term').custom(value => {
        if(value != 'si'){
            return false
        }else{
            return true
        }
    }).withMessage('tiene que aceptar los terminos y condiciones')

]