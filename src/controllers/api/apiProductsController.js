const db = require('../../database/models');
const { Op } = require("sequelize");
const { response } = require('express');

const apiProductsController = {

    list: (req,res) => {
        db.Product.findAll()
        .then(products => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: products.length,
                    url: '/api/products'
                },
                data: products
            }
            res.json(respuesta);
        })
    },
    show: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(product => {
            let respuesta = {
                meta: {
                    status: 200,
                    url: '/api/products/:id'
                },
                data: product
            }
            
            res.json(respuesta)
        })
    }
}

module.exports = apiProductsController;