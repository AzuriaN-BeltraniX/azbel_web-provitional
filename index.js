// Importaciones:
const express = require("express");
require('dotenv').config();
const app = express();

// Contenico estático:
app.use(express.static('public'));

// Rutas:
app.get('/', express.static('public', { redirect: false })); // Resuelve a la página estática.

app.get('*', function(req, res, next) {
    res.sendFile(__dirname + '/public/notFound.html');
}); // Cualquier ruta ajena a la raiz redirige a otra página estática.

// Esuchando el puerto 3000.
const port = process.env.PORT; // Define el puerto...

app.listen(port, () => {
    console.log(`\x1b[35m[ App Port ] \x1b[0m\x1b[2m=== \x1b[0m\x1b[1m${port} \x1b[0m`);
}); // Escucha el puerto definido