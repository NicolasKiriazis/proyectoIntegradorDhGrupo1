const { Router } = require('express')
const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')
const userRoute = require('../middlewares/userRoute');
const adminMiddleware = require('../middlewares/adminMiddleware');
//RUTA HOME
router.get('/', adminMiddleware, mainController.home)

//RUTA ADMIN

router.get('/admin', mainController.admin)

//RUTA PRODUCT CART 

router.get('/productCart', userRoute, mainController.productCart)

//RUTA REGISTER 

/*router.get('/register', mainController.register)*/



module.exports = router;