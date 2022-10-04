
const mainController = {
    home: function(req,res){
        res.render('home')
    },
    detalle: function(req,res){
        res.render('products/productDetail')
    },
    login: function(req,res){
        res.render('users/login')
    },
    register: function(req,res){
        res.render('users/register')
    }, 
    productCart: function(req,res){
        res.render('products/productCart')
    },
    creacion: function (req, res) {
        res.render('products/creacionProducto')
    },
    listado: function(req,res){
        res.render('products/productList', {'products':products})
    }

}

const products = [
    'EA SPORTS™ FIFA 23 Pre-order Edition',
    'Call of Duty®: Modern Warfare® II',
    'God of War',
    'MINECRAFT - Starter Edition'
]

module.exports = mainController;
