var express = require('express');
var morgan = require('morgan'); // Charge le middleware de login

var app = express();

app.use(morgan('combined')) // Active le middleware login
.use(express.static(__dirname + '/public')) // Indique que le dossier public contient des fichiers statiques (middleware chargé de base)
.use(function(req, res) {
    res.send('Hello');
});

app.listen(8080);
