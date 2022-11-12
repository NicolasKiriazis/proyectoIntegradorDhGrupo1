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
    }
}

module.exports = controller;