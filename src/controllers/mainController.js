const fs = require('fs');
const path = require('path');
const router = require("../router/mainRouter");
const db = require('../database/models');

const Product = require("../database/models/Product");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
    home: async (req, res) => {
        try {
            let products = await db.Product.findAll();

            res.render('home', { products, toThousand })

        } catch (error) {
            console.log(error)
        }
    },

    admin: function (req, res) {
        res.render('admin')
    },   

    productCart: function (req, res) {
        res.render('products/productCart')
    }
}

module.exports = mainController;
