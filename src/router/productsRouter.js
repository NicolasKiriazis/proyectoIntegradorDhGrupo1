const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const productsController = require('../controllers/productsController');


const userRoute = require('../middlewares/userRoute');

// config multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/image/product-detail-img'))
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
router.get('/create', userRoute, productsController.formulario);

// ruta para crear el producto
router.post('/create', userRoute, upload.single('image'),productsController.creacion);

// ruta para mostrar el formulario de edicion de productos
router.get('/edit/:id', userRoute, productsController.edit);

// ruta para editar el producto
router.patch('/edit/:id', userRoute, upload.any(),productsController.update); 

// ruta para eliminar el producto
router.delete('/delete/:id', userRoute, productsController.destroy);

module.exports = router;