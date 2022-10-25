const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

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
router.patch('/edit/:id', productsController.update); 

// ruta para eliminar el producto
router.delete('/delete/:id', productsController.destroy);

module.exports = router;