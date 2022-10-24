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
    }
}

module.exports = controller;

