const fs = require('fs');
const path = require('path');
const router = require("../router/mainRouter");
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = db.Sequelize;
const { validationResult } = require('express-validator');

const { Product, Category, Type, Platform } = require('../database/models')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


let controller = {

    index: async (req, res) => {

        try {

            const products = await Product.findAll({
                include: [{ association: 'product_category' }]
            })
            //return res.send(products)

            return res.render('products/productList', { products, toThousand})
        } catch (error) {
            return res.send(error)

        }

    },

    detail: async (req, res) => {

        try {

            const { id } = req.params;
            const product = await Product.findByPk(id)
            res.render('products/productDetail', { product, toThousand })

        } catch (error) {
            return res.send(error)
        }

    },

    formulario: async (req, res) => {

        try {
            const categories = await Category.findAll()
            const platforms = await Platform.findAll()
            const types = await Type.findAll()


            return res.render('products/creacionProducto', { categories, platforms, types })
        } catch (error) {
            return res.send(error)
        }
    },

    creacion: async (req, res) => {

        try {
            const resultValidation = validationResult(req);

            if (resultValidation.errors.length > 0) {
                const categories = await Category.findAll()
                const platforms = await Platform.findAll()
                const types = await Type.findAll()
                console.log(resultValidation.errors);
                console.log(req.body);
                return res.render('products/creacionProducto', { categories, platforms, types, errors: resultValidation.mapped(), old: req.body })
            }

            let image
            if (req.file != undefined) {
                image = req.file.filename
            } else {
                image = 'default-image.png'
            }


            let product = {
                ...req.body,
                category_id: req.body.category,
                platform_id: req.body.platform,
                type_id: req.body.type,
                image

            };

            delete product.category,
                delete product.platform,
                delete product.type
            console.log(product);

            //return res.send(product)
            await Product.create(product)
            return res.redirect('/products')
        } catch (error) {
            console.log(error)
        }

    },

    edit: async (req, res) => {

        try {

            const { id } = req.params;
            // const categories = await Category.findAll()
            // const productToEdit = await Product.findByPk(id,{include: [{association:'category'}]})

            const [categories, platforms, types, productToEdit] = await Promise.all([
                Category.findAll(),
                Platform.findAll(),
                Type.findAll(),
                Product.findByPk(id, { include: [{ all: true }] })
            ])

            //return res.send({productToEdit,categories})
            return res.render('products/productEdit', { productToEdit, categories, platforms, types })

        } catch (error) {
            return res.send(error)
        }
    },

    update: async (req, res) => {

        try {
            const { id } = req.params

            let image
            if (req.file != undefined) {
                image = req.file.filename
            } else {
                image = 'default-image.png'
            }

            productToEdit = {

                ...req.body,
                category_id: req.body.category,
                platform_id: req.body.platform,
                type_id: req.body.type,
                image
            };
            await Product.update(productToEdit, {
                where: { id }
            })

            res.redirect('/products');
        } catch (error) {
            return res.send(error)

        }
    },

    destroy: async (req, res) => {

        try {
            const { id } = req.params

            await Product.destroy({
                where: { id }
            })
            return res.redirect('/products')

        } catch (error) {
            return res.send(error)

        }
    }
}

module.exports = controller;

