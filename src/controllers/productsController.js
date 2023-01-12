const fs = require('fs');
const path = require('path');
const router = require("../router/mainRouter");
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = db.Sequelize;
const { validationResult } = require('express-validator');

const { Product, Category, Type, Platform } = require('../database/models')

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// let ofertas = products.filter(product => product.type == "oferta")
let nuevos = products.filter(product => product.type == "nuevo");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


// const nuevos = products.filter(function(product){
// 	return product.type == 'nuevo'
// })


let controller = {
    // index: (req, res) =>{
    //     res.render('products/productList', {
    //         products,
    //         toThousand,
    //         nuevos
    //     })

    index: async (req, res) => {

        try {

            const products = await Product.findAll({
                include: [{ association: 'product_category' }]
            })
            //return res.send(products)

            return res.render('products/productList', { products, toThousand, nuevos })
        } catch (error) {
            return res.send(error)

        }

    },

    // detail: (req, res) => {

    //     let product = products.find(product => product.id ==  req.params.id)

    //     res.render('products/productDetail', {
    //         product
    //     })

    detail: async (req, res) => {

        try {

            const { id } = req.params;
            const product = await Product.findByPk(id)
            res.render('products/productDetail', { product, toThousand })

        } catch (error) {
            return res.send(error)

        }

    },
    // formulario: (req, res) => {
    //     res.render('products/creacionProducto')
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

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('products/creacionProducto', { errors: errors.mapped(), old: req.body })

        } else {

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
            //console.log(product);

            //return res.send(product)
            await Product.create(product)
            return res.redirect('/products')
        }
        // creacion: (req, res) => {

        //     let image 
        //     ( req.files[0] != undefined ) ? image = req.files[0].filename : image = productToEdit.image      

        //     let nuevoProducto = {
        //         id: products[products.length - 1].id + 1,
        //         image: image,
        //         ...req.body
        //     };
        //     products.push(nuevoProducto);
        //     fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
        // 	res.redirect('/products');
    },
    // edit: (req, res) => {
    //     let id = req.params.id
    //     let productToEdit = products.find(product => product.id == id)

    //     res.render('products/productEdit', { productToEdit })
    edit :async (req, res) => {

		try {
			const {id} = req.params;
			// const categories = await Category.findAll()
			// const productToEdit = await Product.findByPk(id,{include: [{association:'category'}]})

			const [ categories, platforms, types, productToEdit] = await Promise.all([
				Category.findAll(),
                Platform.findAll(),
                Type.findAll(),
				Product.findByPk(id,{include: [ { all: true }]})
			])

			//return res.send({productToEdit,categories})
			return res.render('products/productEdit', {productToEdit,categories,platforms,types})

		} catch (error) {
			return res.send(error)
			
		}
    },

    update: async(req, res) => {
		try {
			
			const {id} = req.params
	
			let image
			if(req.file != undefined){
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

    // update: (req, res) => {
    //     let id = req.params.id;
    //     let productToEdit = products.find(product => product.id == id)

    //     console.log(req.files);

    //     let image
    //     (req.files[0] != undefined) ? image = req.files[0].filename : image = productToEdit.image

    //     productToEdit = {
    //         id: productToEdit.id,
    //         ...req.body,
    //         image: image,
    //     };

    //     let newProducts = products.map(product => {
    //         if (product.id == productToEdit.id) {
    //             return product = { ...productToEdit };
    //         }
    //         return product;
    //     })

    //     fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
    //     res.redirect('/products');
    },

    destroy : async(req, res) => {

		try {
			const {id} = req.params
			
			await Product.destroy({
				where: { id }
			})
			return res.redirect('/products')

		} catch (error) {
			return res.send(error)
			
		}

    // destroy: (req, res) => {
    //     let id = req.params.id;
    //     let finalProducts = products.filter(product => product.id != id);
    //     fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
    //     res.redirect('/products');
    }
}

module.exports = controller;

