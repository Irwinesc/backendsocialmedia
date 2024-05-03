'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800; 

//Conexión Database
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://irwinescalante:k1rsvAWjCN9LZhRb@cluster0.aomktxm.mongodb.net/MEAN_Social?retryWrites=true&w=majority&appName=Cluster0")
.then(()=> {
    console.log('La conexión a la base de datos MEAN_Social se ha realizado correctamente')

    //Crear servidor
    app.listen(port, () => {
        console.log("Servidor corriendo en http://localhost:3800")
    })

}).catch(err => console.log(err));

//k1rsvAWjCN9LZhRb