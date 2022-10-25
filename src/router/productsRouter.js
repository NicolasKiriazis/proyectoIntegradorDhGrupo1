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

module.exports = router;