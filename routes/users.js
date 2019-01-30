// REQUIRE CONSTANTS
const
	express = require('express'),
	usersRouter = new express.Router(),
	usersCtrl = require('../controllers/users.js')
	verifyToken = require('../serverAuth').verifyToken;

	// PUBLIC ROUTES
usersRouter.get('/', usersCtrl.index)
usersRouter.post('/', usersCtrl.create)
usersRouter.post('/authenticate', usersCtrl.authenticate)

// Middleware to verify user has a valid token before showing subsequent requests/routes.
usersRouter.use(verifyToken)

// PROTECTED/HIDDEN routes
usersRouter.get('/:id', usersCtrl.show)
usersRouter.patch('/:id', usersCtrl.update)
usersRouter.delete('/:id', usersCtrl.destroy)

module.exports = usersRouter