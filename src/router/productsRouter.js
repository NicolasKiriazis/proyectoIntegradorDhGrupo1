const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const productsController = require('../controllers/productsController');

const userRoute = require('../middlewares/userRoute');
const productVal = require('../middlewares/productValidation');


// config multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/image/product-detail-img'))
    },
    filename: function (req, file, cb) {
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
router.post('/create', upload.single('image'), productVal, productsController.creacion);

// ruta para mostrar el formulario de edicion de productos
router.get('/edit/:id', userRoute, productsController.edit);

// ruta para editar el producto
router.patch('/edit/:id', upload.single('image'), productVal, productsController.update);

// ruta para mostrar resultados buscados
router.get('/results', productsController.productSearch);

// ruta para eliminar el producto
router.delete('/delete/:id', userRoute, productsController.destroy);

//API
router.get('/apiList', productsController.apiList);
router.get('/apiDetail/:id', productsController.apiDetail);

module.exports = router;