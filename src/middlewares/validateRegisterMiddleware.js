const path = require('path');
const { body } = require('express-validator');

module.exports = [
	// Validar Nombre y Apellido

	body('name')
		.notEmpty().withMessage('Tienes que escribir un nombre').bail()
		.isLength({ min: 2 }).withMessage('Este campo debe contener mínimo 2 caracteres'),

	body('lastname')
		.notEmpty().withMessage('Por favor ingrese su Apellido').bail()
		.isLength({ min: 2 }).withMessage('Este campo debe contener mínimo 2 caracteres'),

	// Validar E-mail

	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),

	//Validar password
	body('password')
		.notEmpty().withMessage('Tienes que escribir una contraseña').bail()
		.isLength({ min: 8 }).withMessage('La contraseña debe contener mínimo 8 caracteres'),

	body('image')
		.custom((value, { req }) => {
			
			let file = req.file;
			let acceptedExtensions = ['.jpg', '.png', '.gif'];

			if (!file) {
				throw new Error('Tienes que subir una imagen');
			} else {
				let fileExtension = path.extname(file.originalname);
				if (!acceptedExtensions.includes(fileExtension)) {
					throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
				}
			}

			return true;
		})
]