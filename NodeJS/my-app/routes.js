// faire appel au framework express dans une variable
const express = require('express');
// change la variable en fonction dans une autre variable
const app = express();

// variable app reçoit (= .get) l'url '/'
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Tu es a l\'acceuil.');
});

app.get('/sous-sol', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Tu es au sous-sol..');
});

// // Route simple
// app.get('/etage/1/chambre', function(req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Tu es dans une chambre au 1er etage.');
// });

// // Route dynamique
// app.get('/etage/:numero/chambre', function(req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Tu es dans la chambre a l\'etage n°' + req.params.numero + ' !');
// });

// Route dynamique via template EJS
app.get('/etage/:numero/chambre/:porte', function(req, res) {
    res.render('chambre.ejs', {etage: req.params.numero , chambre: req.params.porte});
});

// Plusieurs paramètres et boucles
app.get('/compter/:nombre', function(req, res) {
    var nom = ['Ilias', 'Kevin', 'Jimmy'];
    res.render('compter.ejs', {compteur: req.params.nombre, nom: nom});
});

// Gestion d'une 404 à la fin du code, juste avant le listen
app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !!');
});

// on affiche le tout via le port 8080
app.listen(8080);
