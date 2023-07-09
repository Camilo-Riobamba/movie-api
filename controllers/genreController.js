const Genre = require('../models/Genre');

const genreController = {
    getAllGenres: async (req, res) => {
        try {
            const genres = await Genre.findAll();
            res.json(genres);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtenerlos géneros' });
        }
    },

    createGenre: async (req, res) => {
        try {
            const { name } = req.body;
            const genre = await Genre.create(name);
            res.status(201).json(genre);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el género' });
        }
    }
};

module.exports = genreController;
