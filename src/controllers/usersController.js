const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const User = require("../database/models/User");

// API
const axios = require('axios');
const API = 'http://localhost:2000/api/users'

let controller = {

	index: async (req, res) => {
		try {

			const users = await User.findAll();
			return res.render('users/users', {
				users
			})

		} catch (error) {
			return res.send(error)
		}
	},

	register: (req, res) => {
		return res.render('users/register');
	},

	registered: async (req, res) => {
		try {
			const resultValidation = validationResult(req);
			if (resultValidation.errors.length > 0) {
				return res.render("users/register", {
					errors: resultValidation.mapped(),
					oldData: req.body
				})
			}

			let userInDb = await db.User.findOne({
				where: {
					email: req.body.email
				}
			})

			if (userInDb) {
				return res.render("users/register", {
					errors: {
						email: {
							msg: "Email ya registrado"
						}
					},
					oldData: req.body
				})
			}

			let userToCreate = {
				...req.body,
				password: bcrypt.hashSync(req.body.password, 10),
				passwordRepite: bcrypt.hashSync(req.body.passwordRepite),
				image: req.file.filename,
				category_id: 1
			}

			console.log(userToCreate)

			await db.User.create(userToCreate);
			return res.redirect("/users/login");
		} catch (error) {
			console.log(error)
		}
	},

	login: (req, res) => {
		res.render('users/login');
	},

	autenticate: async (req, res) => {
		try {
			const resultValidation = validationResult(req);
			if (resultValidation.errors.length > 0) {
				return res.render("users/login", {
					errors: resultValidation.mapped(),
					oldData: req.body
				})
			}

			let userToLogin = await db.User.findOne({
				where: {
					email: req.body.email
				}
			});

			if (userToLogin) {
				let comparePasswords = bcrypt.compareSync(req.body.password, userToLogin.password);
				if (comparePasswords) {
					delete userToLogin.password;
					req.session.userLogged = userToLogin;
					console.log(req.session.userLogged)

					if (req.body.remember) {
						res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 10 })
					}

					return res.redirect('/')
				}
				return res.render("users/login", {
					errors: {
						email: {
							msg: "Email o contraseña incorrectos"
						}
					}
				})
			}
			return res.render("users/login", {
				errors: {
					email: {
						msg: "Email de usuario no ha sido registrado"
					}
				}
			})
		} catch (error) {
			console.log(error)
		}
	},

	profile: (req, res) => {

		return res.render('users/userProfile', {
			user: req.session.userLogged,
		})
	},

	edit: (req, res) => {

		db.User.findByPk(req.params.id)
		.then(function (userToEdit) {
			res.render('users/edit', {
				userToEdit: userToEdit
			});
		})
		.catch((error) => {
			res.send(error);
		});
	},
	update: async (req, res) => {

		try {
			const resultValidation = validationResult(req);
			if (resultValidation.errors.length > 0) {
				return res.render("users/edit/", {
					errors: resultValidation.mapped(),
					userToEdit: req.session.userLogged,
					oldData: req.body
				})
			}

			let image
			if (req.file != undefined) {
				image = req.file.filename
			} else {
				image = 'default-profile.png'
			}

			let userInDb = await db.User.findOne({
				where: {
					email: req.body.email
				}
			})

			if (userInDb && userInDb.email == req.session.userLogged.email) {
				let userToUpdate = {
					...req.body,
					password: bcrypt.hashSync(req.body.password, 10),
					passwordRepite: bcrypt.hashSync(req.body.passwordRepite),
					image,
					category_id: 1
				}

				let userUpdated = await db.User.update(userToUpdate, {
					where: {
						id_users: req.params.id
					}
				});

				req.session.destroy();
				res.clearCookie("userEmail");
				res.redirect('/users/login')
			} else if (userInDb) {
				return res.render("/users/edit", {
					user: req.session.userLogged,
					errors: {
						email: {
							msg: "Este email ya ha sido registrado"
						}
					},
					oldData: req.body
				})
			} else {
				let userToUpdate = {
					...req.body,
					password: bcrypt.hashSync(req.body.password, 10),
					passwordRepite: bcrypt.hashSync(req.body.passwordRepite),
					image,
					category_id: 1
				}

				await db.User.update(userToUpdate, {
					where: {
						id_users: req.params.id
					}
				});

				req.session.destroy();
				res.clearCookie("userEmail");
				res.redirect('/users/login')
			}
		} catch (error) {
			console.log(error)
		}

	},

	logout: (req, res) => {
		req.session.destroy();
		res.clearCookie("userEmail");
		console.log(req.session);
		// Redirigimos a la home
		return res.redirect('/');
	},
//Mostrar usuarios por API
	apiList: async (req, res) => {
		axios.get(API)
		/*.then((response) => {
            console.log(response.data.meta.total);
        });*/
		.then(users => {
			res.render('users/apiUsers',{ users: users.data, total: users.data.meta })
		})
	},

	apiDetail: async (req,res) => {
		try {
			let id = req.params.id;
			//console.log(id)
			const {data} = await axios.get(API + '/'+ id);
			//console.log(data)
			res.render('users/apiUsersDetail', { user: data.data });
		
		}catch(error) {
			console.log(error);
		}
	}
}

module.exports = controller;