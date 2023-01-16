function authMiddleware(req, res, next) {
    if (req.session.userLogged && req.session.userLogged.category_id!=2) {
        return res.redirect('/')
    } else if (!req.session.userLogged){
        return res.redirect('/') 
    }

    next()
}

module.exports = authMiddleware