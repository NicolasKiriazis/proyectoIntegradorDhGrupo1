module.exports = (req, res, next) => {
    // Si existe el usuario en session
   let user = req.session.userLogged
    if (req.session.userLogged) {
        return res.render('users/userProfile', {
			user
		})
    } else {
        next();
    }
}