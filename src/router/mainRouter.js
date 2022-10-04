const { Router } = require('express')
const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')


//RUTA HOME//
router.get('/', mainController.home)

//RUTA LOGIN//

router.get('/login', mainController.login)

// RUTA PRODUCT DETAIL //
router.get('/productDetail', mainController.detalle)

//RUTA PRODUCT CART //

router.get('/productCart', mainController.productCart)

//RUTA REGISTER //

router.get('/register', mainController.register)

// RUTA DE LA PAG DE CREACION DEL PRODUCTO

router.get('/createProduct',mainController.creacion);

// RUTA LISTADO DE PRODUCTOS

router.get('/listado',mainController.listado);

module.exports = router