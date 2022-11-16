const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const usersController = require('../controllers/usersController');

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

router.get("/", usersController.index);

router.get("/profile/:id", usersController.profile);

router.delete('/delete/:id', usersController.destroy);

router.get('/login', usersController.login);

// ruta para mostrar el fomulario de registro del usuario
router.get("/register", usersController.register);

// ruta para crear el usuario
router.post("/register",upload.single('image'),usersController.registered);

module.exports = router;