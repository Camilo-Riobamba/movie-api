const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

router.get('/', movieController.getAllMovies);
router.post('/', movieController.createMovie);
router.post('/:id/genres', movieController.addGenresToMovie);
router.post('/:id/actors', movieController.addActorsToMovie);
router.post('/:id/directors', movieController.addDirectorsToMovie);

module.exports = router;
