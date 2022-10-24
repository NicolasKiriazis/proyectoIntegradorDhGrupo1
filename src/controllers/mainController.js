
const mainController = {
    home: function(req,res){
        res.render('home')
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
    }

}

module.exports = mainController;
