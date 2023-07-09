const Director = require('../models/Director');

const directorController = {
    getAllDirectors: async (req, res) => {
        try {
            const directors = await Director.findAll();
            res.json(directors);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los directores' });
        }
    },

    createDirector: async (req, res) => {
        try {
            const { firstName, lastName, nationality, image, birthday } =
                req.body;
            const director = await Director.create(
                firstName,
                lastName,
                nationality,
                image,
                birthday
            );
            res.status(201).json(director);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el director' });
        }
    }
};

module.exports = directorController;
