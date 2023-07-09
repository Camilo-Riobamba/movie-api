const express = require('express');
const actorController = require('../controllers/actorController');

const router = express.Router();

router.get('/', actorController.getAllActors);
router.post('/', actorController.createActor);

module.exports = router;
