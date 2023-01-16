function guestMiddleware(req, res, next) {
    if (req.session.userLogged ) {
        return res.render('users/userProfile')
        
    }

    next()
}

module.exports = guestMiddleware