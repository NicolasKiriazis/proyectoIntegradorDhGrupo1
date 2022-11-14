const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const usersFilePath = path.join(__dirname, '../data/userDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

let controller = {

    index: (req,res) =>{
        res.render('users/users', {
            users
        })
    },

    register: (req,res)=>{
        res.render('users/register');
    },

    registered: function (req, res) { 
    },

    login (req,res) {
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