const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const notesController = require('../../controllers/api/notes');


router.get('/', ensureLoggedIn, notesController.index);

router.post('/', ensureLoggedIn, notesController.create);

router.post('/:id', ensureLoggedIn, notesController.delete);

module.exports = router;