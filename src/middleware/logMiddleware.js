const { check } = require("express-validator");

const validations = [
    check ('email')
    .notEmpty().withMessage ('Debes completar el email')
    .isEmail ().withMessage('Debe ingresar un mail valido'),

    check ('password')
    .notEmpty().withMessage ('Debes completar la contraseña')
    .isLength({min: 3}).withMessage('Debe ingresar una contraseña valida'),
]

module.exports = validations