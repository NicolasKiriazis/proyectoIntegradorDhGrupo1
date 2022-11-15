const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const oferta = products.filter(function(product){
	return product.type == 'oferta'
})
const nuevos = products.filter(function(product){
	return product.type == 'nuevo'
})


const mainController = {
    home: function(req,res){
        res.render('home',{
            oferta,
            nuevos,
            toThousand
        });
    },
    /*login: function(req,res){
        res.render('users/login')
    },*/
/*    register: function(req,res){
        res.render('users/register')
    }, */
    productCart: function(req,res){
        res.render('products/productCart')
    }
}

module.exports = mainController;
