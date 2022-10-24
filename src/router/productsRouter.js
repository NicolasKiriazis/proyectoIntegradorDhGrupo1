const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get("/", productsController.index)

// ruta para el detalle de un producto //

router.get('/detail/:id', productsController.detail)

module.exports = router;