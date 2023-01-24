const db = require('../../database/models');
const { Op } = require("sequelize");
const { response } = require('express');

const apiProductsController = {

    list: async (req, res) => {
        let category = await db.Category.findAll(); // recuperar categorias
        let products = await db.Product.findAll(); // recuperar productos

        for (let index = 0; index < products.length; index++) {
            products[index].setDataValue(
                "detail",
                `http://localhost:2000/api/products/${products[index].id}`

            )
            products[index].setDataValue(
                "imageUrl",
                `http://localhost:2000/image/product-detail-img/${products[index].image}`
            )
        }

        let result = [];

        for (let i = 0; i < category.length; i++) {
            let count = await db.Product.count({
                where: { category_id: category[i].id },
            });
            cat = {
                id: category[i].id,
                name: category[i].name,
                total: count
            }
            result.push(cat)
        }

        let respuesta = {
            meta: {
                status: 200,
                total: products.length,
                countByCategory: result,
                url: '/api/products'
            },
            data: products
        }
        res.json(respuesta);
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