module.exports = (req, res, next) => {
    // Si existe el usuario en session
    if (req.session.userLogged) {
        // Lo dejamos pasar
        
        next();
    } else {
        res.redirect('/');
    }
}