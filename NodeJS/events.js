// var http = require('http');
var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();

jeu.on('GameOver', function(message) {
    console.log(message);
});
jeu.emit('GameOver', 'Game\'s Over ..');

jeu.on('nouveauJoueur', function(pseudo, age) {
    console.log(pseudo, age);
});
jeu.emit('nouveauJoueur', 'Krispero', 20);


// var server = http.createServer(function(req, res) {
//     res.writeHead(200);
//     res.end('Coucou ici !');
// });

// server.on('close', function() {
//     console.log('Bye Bye !');
// });

// server.listen(8080);
// server.close();
