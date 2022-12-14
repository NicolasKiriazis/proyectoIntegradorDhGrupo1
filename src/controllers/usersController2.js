//const express = require('express');
//const router = express.Router();
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const { receiveMessageOnPort } = require('worker_threads');

const usersFilePath = path.join(__dirname, '../data/userDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const User = require('../models/User');

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
        const errors = validationResult (req)
        console.log (errors)
        if (!errors.isEmpty ()) {
            return res.render ('users/login', {errors:errors.errors})
        }
        let user = users.find (user => user.email==req.body.email)
        
        if (user) {

            let passOk = bcrypt.compareSync(req.body.password, user.password)

            if (passOk) {
                delete user.password ;
                req.session.usuarioLog = user ;
                console.log (req.session.usuarioLog)

                return res.redirect ('/')
            }
            return res.render ('users/login',{
                errors: {email:{msg:"usuario o contraseña invalida" }
                }
            })
        }

        return res.render ('users/login',{
            errors: {email:{msg:"usuario o contraseña invalida" }
        }
            });

    }
}
module.exports = controller;