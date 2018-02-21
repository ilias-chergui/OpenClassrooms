// Variable qui va faire appel à la librairie http de NodeJS
var http = require('http');

// Fonction qui crée un serveur
var server = http.createServer(function(req, res) {

    // Renvoi un code 200 qui précise au navigateur que tout va bien
    res.writeHead(200);

    // Renvoi un message au navigateur
    res.end('Coucou les gens!');
});

// Fonction d'écoute via le port "8080"
server.listen(8080);
