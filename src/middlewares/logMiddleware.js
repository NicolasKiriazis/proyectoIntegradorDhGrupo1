const { check } = require("express-validator");

const validations = [
    check ('email')
    .notEmpty().withMessage ('Debes completar el email').bail()
    .isEmail ().withMessage('Debe ingresar un mail valido').bail(),

    check ('password')
    .notEmpty().withMessage ('Debes completar la contraseña')
    .isLength({min: 2}).withMessage('Debe ingresar una contraseña valida'),
]

module.exports = validations