// Variable qui va faire appel à la librairie http de NodeJS
var http = require('http');

// Variable qui va récupérer la page que demande le client
var url = require('url');

// Module qui va découper les différents parametres de l'url
var querystring = require('querystring');

// Fonction qui crée un serveur
var server = http.createServer(function(req, res) {

    // On parse l'url pour obtenir le nom de la page demandée
    var page = url.parse(req.url).pathname;

    // On entre pes parametres découpés dans un tableau 'params'
    var params = querystring.parse(url.parse(req.url).query);

    // Renvoi un code 200 qui précise au navigateur que tout va bien
    // Et le contenu sera du text/plain
    res.writeHead(200, {"Content-Type": "text/plain"});

    if (page == '/') {
        res.write('Vous vous trouvez à l\'acceuil. ');
    }
    else if (page == '/sous-sol') {
        res.write('Vous vous trouvez maintenant au sous-sol. ');
    }
    else if (page == '/etage/1/chambre') {
        res.write('Vous vous situez dans la chambre au 1er etage. ');
    }
    else {
        // Renvoi un code 404 (= erreur) + message
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write('La page que vous cherchez n\'existe pas..');
    }

    if ('prenom' in params && 'nom' in params) {
        res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
    }
    else {
        res.write('Pas de nom ni prenom ?');
    }

    // Renvoi le resultat au navigateur
    res.end();
});

// Fonction d'écoute via le port "8080"
server.listen(8080);
