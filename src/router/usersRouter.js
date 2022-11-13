const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const usersController = require('../controllers/usersController')


router.get("/", usersController.index)


module.exports = router;