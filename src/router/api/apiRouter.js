const express = require('express');
const router = express.Router();
const apiProductsController = require('../../controllers/api/apiProductsController');
const apiUsersController = require('../../controllers/api/apiUserController');

router.get('/products', apiProductsController.list);
router.get('/products/:id', apiProductsController.show);

router.get('/users', apiUsersController.list);
router.get('/users/:id', apiUsersController.show);

module.exports = router;