function adminMiddleware(req, res, next) {
    if (req.session.userLogged && req.session.userLogged.categoriaId==2) {
        return res.redirect("/product/list/admin") 
    } 

    next()
}

module.exports = adminMiddleware