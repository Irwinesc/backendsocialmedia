'use strict'

var User = require('../models/user');

function home(req, res) {
    res.status(200).send({
        message: 'Hola mundo desde el servidor de NodeJS'
    })
}

function pruebas(req, res) {
    console.log(req.body);
    res.status(200).send({
        message: 'Acción de prueba en el servidor de NodeJS'
    })
}

module.exports = {
    home,
    pruebas
}