const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const productsController = require('../controllers/productsController');

// config multer
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/product-detail-img')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  }) 
 
  
  let upload = multer({ storage: storage })
  
  
// ruta para el home
router.get("/", productsController.index)

// ruta para el detalle de un producto //
router.get('/detail/:id', productsController.detail)

// ruta para mostrar el fomulario de creacion de productos
router.get('/create', productsController.formulario);

// ruta para crear el producto
router.post('/create',productsController.creacion);

// ruta para mostrar el formulario de edicion de productos
router.get('/edit/:id', productsController.edit); 

// ruta para editar el producto
router.patch('/edit/:id', upload.any(),productsController.update); 


module.exports = router;