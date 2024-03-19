const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// insert ensureLoggedIn on all routes that need protecting
router.get('./check-token', ensureLoggedIn, usersController.checkToken);

// GET /api/users/check-token
router.get('/check-token', usersController.checkToken);

// POST /api/users
router.post('/', usersController.create);
router.post('/login', usersController.login);

module.exports = router;