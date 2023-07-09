const express = require('express');
const bodyParser = require('body-parser');
const genreRoutes = require('./routes/genreRoutes');
const actorRoutes = require('./routes/actorRoutes');
const directorRoutes = require('./routes/directorRoutes');
const movieRoutes = require('./routes/movieRoutes');

const app = express();
app.use(bodyParser.json());

// Configurar rutas
app.use('/genres', genreRoutes);
app.use('/actors', actorRoutes);
app.use('/directors', directorRoutes);
app.use('/movies', movieRoutes);

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});
