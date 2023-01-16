//const express = require('express');
//const router = express.Router();
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { validationResult } = require('express-validator');
const { receiveMessageOnPort } = require('worker_threads');

const usersFilePath = path.join(__dirname, '../data/userDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const User = require('../models/User');

const userLoginInfoFilePath = path.join(__dirname, '../data/userLoginInfo.json');
const usersLoginInfo = JSON.parse(fs.readFileSync(userLoginInfoFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let controller = {

    index: (req,res) =>{
        res.render('users/users', {
            users
        })
    },

    register: (req,res)=>{
        res.render('users/register');
    },

    registered: (req, res) => {

        let image
        ( req.file != undefined ) ? image = req.file.filename : image = 'gamer.png';

        let nuevo = {
            id: users[users.length - 1].id + 1,
            ... req.body,
            image
        };

        const resultValidation = validationResult(req);


        if(resultValidation.errors.length > 0) {
            return res.render('users/register', {
            errors: resultValidation.mapped(),
            oldData: req.body
        })
        }
        
        let userInDB = User.findByField('email', req.body.email);

		if (userInDB) {
			return res.render('users/register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}

		let userToCreate = {
			...req.body,
			password: bcrypt.hashSync(req.body.password, 10),
			avatar: req.file.filename
		}

		let userCreated = User.create(userToCreate);

        nuevo.password = bcrypt.hashSync(req.body.password, 10);
        delete nuevo.passwordRepite

        users.push(nuevo);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
		res.redirect('/users/login');
    },

    login: (req,res) => {
        res.render('users/login');
    },

    profile: (req, res) => {

        let user = users.find(user => user.id ==  req.params.id)

        res.render('users/userProfile', {
            user
        })
    },

    destroy : (req, res) => {
		let id = req.params.id;
		let finalUsers = users.filter(user => user.id != id);
		fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, ' '));
		res.redirect('/users');
	}, 
    autenticate: (req, res)=> {

        
        const { email,password } = req.body;

		//verifico si el mail q puso en el formulario esta en nuestra db
		let user = users.find(user => user.email ==email)

		if (user) {
			// y la contraseña es correcta...
			if (bcrypt.compareSync(password,user.password)) {
				// Eliminamos los datos sensibles y guardamos el usuario en sesión
				delete user.password;

				req.session.user = user;

				
				// Si pidió que lo recordemos
				if (req.body.remember) {
					// Generamos un token seguro, eso para que no pueda entrar cualquiera
					// https://stackoverflow.com/questions/8855687/secure-random-token-in-node-js
					const token = crypto.randomBytes(64).toString('base64');
					user.token=token
					// Lo guardamos en base, para poder chequearlo luego
		
					
					let userLoginInfo = [...usersLoginInfo, user]
					fs.writeFileSync(userLoginInfoFilePath, JSON.stringify(userLoginInfo, null, ' '));
					
					// Recordamos al usuario por 3 meses         msegs  segs  mins  hs   días
					res.cookie('rememberToken', token, { maxAge: 1000 * 60  * 60 *  24 * 90 });                
				}

				// Finalmente lo mandamos a la home
				return res.redirect('/');
			} else {
				// Si la contraseña esta mal
				return res.render('users/login', { 
					old: req.body,
					errors: { 
						email: 'El email o la contraseña son inválidos'
					}
				});
			}
		} else {
			// Si el email no existe
			return res.render('users/login', { 
				old: req.body,
				errors: { 
					email: 'El email o la contraseña son inválidos'
				}
			});        
		}

	},

    logout: (req, res) => {
		// Borramos el registro de la base de datos si existe
		const token = usersLoginInfo.find(user => user.token = req.cookies.rememberToken);
		if (token) {
			let logerDeleter = usersLoginInfo.filter(user => user.token != req.cookies.rememberToken);
			fs.writeFileSync(userLoginInfoFilePath, JSON.stringify(logerDeleter, null, ' '));
		}
		// Destruimos la sesión
		req.session.destroy();
		
		// Destruimos la cookie de recordar
		res.clearCookie('rememberToken');

		// Redirigimos a la home
		res.redirect('/');
	}
}
module.exports = controller;