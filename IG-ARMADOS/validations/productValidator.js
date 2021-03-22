const {check, body}= require ("express-validator");
const db = require("../database/models")

module.exports = [
    check('title')
    .notEmpty()
    .withMessage('campo obligatorio'),
    
    check('title')
    .isLength({
        min : 5
    })
    .withMessage('El nombre debe contener al menos 5 caracteres'),

    check('price')
    .notEmpty()
    .withMessage('campo obligatorio'),

    check('price')
    .isNumeric()
    .withMessage('El tipo de dato tiene que numerico'),

    check('insale')
    .notEmpty()
    .withMessage('campo obligatorio'),

    check('insale')
    .isNumeric()
    .withMessage('El tipo de dato tiene que numerico'),

    check('description')
    .notEmpty()
    .withMessage('campo obligatorio'),

    check('description')
    .isLength({
        min : 20
    })
    .withMessage('La descripcion debe contener al menos 20 caracteres'),

    
    check('features')
    .notEmpty()
    .withMessage('campo obligatorio'),

    check('features')
    .isLength({
        min : 20
    })
    .withMessage('La caracteristica debe contener al menos 20 caracteres'),

    check('model')
    .notEmpty()
    .withMessage('campo obligatorio')

]