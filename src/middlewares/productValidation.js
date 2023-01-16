const {body}=require("express-validator");

const productValidation = [
    body('name').notEmpty().withMessage(" Debes ingresar un nombre del producto").bail(),
    // AGREGAR CANTIDAD
    body('price').notEmpty().withMessage(" Debes ingresar una valor").bail(),
    body('discount').optional({checkFalsy: true}).isInt({min:0,max:100}).withMessage(" Debes ingresar una valor entre 0 y 100").bail(),
    
    body('description').notEmpty().withMessage(" Debes ingresar una descripción").bail(),
    body('category').notEmpty().withMessage(" Debes ingresar una categoría").bail(),
    body('platform').notEmpty().withMessage(" Debes ingresar una plataforma").bail(),
    body('type').notEmpty().withMessage(" Debes ingresar una etiqueta").bail()
]

module.exports=productValidation;