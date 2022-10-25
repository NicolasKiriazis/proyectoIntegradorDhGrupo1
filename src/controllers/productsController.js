const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// let ofertas = products.filter(product => product.type == "oferta")
// let nuevos = products.filter(product => product.type == "nuevo")

let controller = {
    index: (req, res) =>{
        res.render('products/productList', {
            products
        })
    },
    
    detail: (req, res) => {

        let product = products.find(product => product.id ==  req.params.id)

        res.render('products/productDetail', {
            product
        })
    },
    formulario: (req, res) => {
        res.render('products/creacionProducto')
    },
    creacion: (req, res) => {
        let nuevoProducto = {
            id: products[products.length - 1].id + 1,
            image: 'default.jpg',
            ...req.body,
        };
        products.push(nuevoProducto);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/products');
    },
    edit: (req, res) => {
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)

		res.render('products/productEdit', {productToEdit})
	},
    update: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id)

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: productToEdit.image,
		};
		
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/products');
	},
    destroy : (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	}
}

module.exports = controller;

