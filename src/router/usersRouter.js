const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const {check} = require ('express-validator')

const usersController = require('../controllers/usersController');
const logValidations = require('../middlewares/logMiddleware')
const regValidations = require('../middlewares/validateRegisterMiddleware');

// ************ Controller Require ************

const guestRoute = require('../middlewares/guestRoute');
const userRoute = require('../middlewares/userRoute');


// config multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/image/users'))
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

let upload = multer({ storage: storage });

router.get("/",userRoute, usersController.index);

router.get("/profile/:id", usersController.profile);

router.get('/login', guestRoute, usersController.login);

router.post('/login', guestRoute, logValidations, usersController.autenticate)

// ruta para mostrar el fomulario de registro del usuario
router.get("/register", guestRoute, usersController.register);

// ruta para crear el usuario
router.post("/register", guestRoute, upload.single('image'), regValidations, usersController.registered);

router.delete('/delete/:id', usersController.destroy);

//logout
router.post('/logout',userRoute, usersController.logout)

module.exports = router;
