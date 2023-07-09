const express = require('express');
const directorController = require('../controllers/directorController');

const router = express.Router();

router.get('/', directorController.getAllDirectors);
router.post('/', directorController.createDirector);

module.exports = router;
