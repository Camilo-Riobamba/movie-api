const Actor = require('../models/Actor');

const actorController = {
    getAllActors: async (req, res) => {
        try {
            const actors = await Actor.findAll();
            res.json(actors);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los actores' });
        }
    },

    createActor: async (req, res) => {
        try {
            const { firstName, lastName, nationality, image, birthday } =
                req.body;
            const actor = await Actor.create(
                firstName,
                lastName,
                nationality,
                image,
                birthday
            );
            res.status(201).json(actor);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el actor' });
        }
    }
};

module.exports = actorController;
