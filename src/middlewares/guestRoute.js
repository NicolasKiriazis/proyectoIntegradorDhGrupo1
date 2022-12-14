module.exports = (req, res, next) => {
    // Si existe el usuario en session
   let user = req.session.user
    if (req.session.user) {
        res.render('users/userProfile', {
            user
        })
    } else {
        next();
    }
}