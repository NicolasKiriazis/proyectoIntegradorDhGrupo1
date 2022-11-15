//const express = require('express');
//const router = express.Router();
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../data/userDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

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

        nuevo.password = bcrypt.hashSync(req.body.password, 10);
        delete nuevo.passwordRepite

        users.push(nuevo);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
		res.redirect('users/login');
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
	}
}

module.exports = controller;