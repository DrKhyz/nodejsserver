let http = require('http'); // Appel la bibliothèque HTTP de NodeJs
var url = require('url'); // Appel de la biblio URL

let server = http.createServer(); // On appelle la fonction createServer() contenue dans l'objet http et on enregistre ce serveur dans la variable server.

// Fonction qui dis a notre serveur quoi faire lorsqu'il est lancé

server.on('request', (request, response) => {
	var page = url.parse(request.url).pathname; // Parse pour obtenir le nom de la page demandé
	response.writeHead(200, {
		// Réponse lors du lancement du serveur
		'Content-type': 'text/html; charset=utf-8' // Précision du type de contenu
	});

	// Conditions pour dire au serveur ce qu'il doit afficher suivant l'url récupérer dans le parse

	if (page == '/') {
		response.write('Bienvenue sur votre serveur !!');
	} else if (page == '/contact') {
		response.write('Nous ne sommes pas joignables pour le moment !');
	} else if (request.url.includes('display')) {
		name = request.url.split('/');
		response.write(`Vous tentez d’afficher le profil de ${name[2]}`);
	}

	response.end();
});

server.listen(3000); // Port sur lequel sera lancé le serveur
