const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

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
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

let upload = multer({ storage: storage });


// ruta de usuarios
router.get("/", usersController.index);

// ruta de perfil
router.get("/profile", userRoute, usersController.profile);

// ruta de login
router.get('/login', guestRoute, usersController.login);

router.post('/login', logValidations, usersController.autenticate)

// ruta para mostrar el fomulario de registro del usuario
router.get("/register", guestRoute, usersController.register);

// ruta para crear el usuario
router.post("/register", upload.single('image'), regValidations, usersController.registered);

// ruta para editar usuarios
router.get('/edit/:id', userRoute, usersController.edit)

router.post('/edit/:id', upload.single('image'), usersController.update)

//logout
router.post('/logout', userRoute, usersController.logout)

// API
router.get('/apiList', usersController.apiList);
router.get('/apiDetail/:id', usersController.apiDetail);

module.exports = router;
