const { Router } = require('express')
const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')
const userRoute = require('../middlewares/userRoute');

//RUTA HOME//
router.get('/',  mainController.home)

//RUTA LOGIN//

/*router.get('/login', mainController.login)*/

//RUTA PRODUCT CART //

router.get('/productCart', userRoute, mainController.productCart)

//RUTA REGISTER //

/*router.get('/register', mainController.register)*/

// RUTA LISTADO DE PRODUCTOS



module.exports = router;