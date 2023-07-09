const Movie = require('../models/Movie');

const movieController = {
    getAllMovies: async (req, res) => {
        try {
            const movies = await Movie.findAll();
            res.json(movies);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener las películas' });
        }
    },

    createMovie: async (req, res) => {
        try {
            const { name, image, synopsis, releaseYear } = req.body;
            const movie = await Movie.create(
                name,
                image,
                synopsis,
                releaseYear
            );
            res.status(201).json(movie);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear la película' });
        }
    },

    addGenresToMovie: async (req, res) => {
        try {
            const { id } = req.params;
            const genreIds = req.body;

            const movie = await Movie.findById(id);
            if (!movie) {
                return res
                    .status(404)
                    .json({ error: 'Película no encontrada' });
            }

            const genres = await Movie.addGenres(movie.id, genreIds);
            res.json(genres);
        } catch (error) {
            res.status(500).json({
                error: 'Error al modificar los géneros de la película'
            });
        }
    },

    addActorsToMovie: async (req, res) => {
        try {
            const { id } = req.params;
            const actorIds = req.body;

            const movie = await Movie.findById(id);
            if (!movie) {
                return res
                    .status(404)
                    .json({ error: 'Película no encontrada' });
            }

            const actors = await Movie.addActors(movie.id, actorIds);
            res.status(201).json(actors);
        } catch (error) {
            res.status(500).json({
                error: 'Error al modificar los actores de la película'
            });
        }
    },

    addDirectorsToMovie: async (req, res) => {
        try {
            const { id } = req.params;
            const directorIds = req.body;

            const movie = await Movie.findById(id);
            if (!movie) {
                return res
                    .status(404)
                    .json({ error: 'Película no encontrada' });
            }

            const directors = await Movie.addDirectors(movie.id, directorIds);
            res.status(201).json(directors);
        } catch (error) {
            res.status(500).json({
                error: 'Error al modificar los directores de la película'
            });
        }
    }
};

module.exports = movieController;
