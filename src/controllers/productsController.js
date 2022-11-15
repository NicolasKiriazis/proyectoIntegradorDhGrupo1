const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// let ofertas = products.filter(product => product.type == "oferta")
// let nuevos = products.filter(product => product.type == "nuevo")

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const nuevos = products.filter(function(product){
	return product.type == 'nuevo'
})
let controller = {
    index: (req, res) =>{
        res.render('products/productList', {
            products,
            toThousand,
            nuevos
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

        let image 
        ( req.files[0] != undefined ) ? image = req.files[0].filename : image = productToEdit.image      

        let nuevoProducto = {
            id: products[products.length - 1].id + 1,
            image: image,
            ...req.body
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
		
		console.log(req.files);

        let image 
        ( req.files[0] != undefined ) ? image = req.files[0].filename : image = productToEdit.image
		
		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: image,
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
		res.redirect('/products');
	}
}

module.exports = controller;

