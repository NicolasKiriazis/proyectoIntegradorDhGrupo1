const db = require('../../database/models');
const { response } = require('express');

const apiUserController = {

    list: (req,res) => {
        db.User
        .findAll()
        .then(users => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: users.length,
                    url: '/api/users'
                },
                data: users
            }
            res.json(respuesta);
        })
    },
    show: (req, res) => {
        db.User
        .findByPk(req.params.id)
        .then(user => {
            let respuesta = {
                meta: {
                    status: 200,
                    url: 'api/users/:id'
                },
                data: user
            }
            
            res.json(respuesta)
        })
    }
}

module.exports = apiUserController;