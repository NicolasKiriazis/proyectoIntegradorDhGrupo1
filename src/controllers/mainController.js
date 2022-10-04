
const mainController = {
    home: function(req,res){
        res.render('home')
    },
    detalle: function(req,res){
        res.render('productDetail')
    },
    login: function(req,res){
        res.render('login')
    },
    register: function(req,res){
        res.render('register')
    }, 
    productCart: function(req,res){
        res.render('productCart')
    },
    creacion: function (req, res) {
        res.render('creacionProducto')
    }
}

module.exports = mainController;
