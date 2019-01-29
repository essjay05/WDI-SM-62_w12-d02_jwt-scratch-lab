// REQUIRE CONSTANTS
const  
    express = require('express'),
    usersRouter = new express.Router(),
    usersCtrl = require('../controllers/users.us'),
    verifyToken = require('../serverAuth').verifyToken;

// PUBLIC ROUTES
usersRouter.get('/', usersCtrl.index)
usersRouter.post('/', usersCtrl.create)
usersRouter.post('/authenticate', usersCtrl.authenticate)

// MIDDLEWARE to verify user has a vakud token before showing subsequent requests/routes
usersRouter.use(verifyToken)

// PROTECTED/HIDDEN routes
usersRouter.get('/:id', usersCtrl.show)
usersRouter.get('/:id', usersCtrl.update)
usersRouter.delete('/:id', usersCtrl.destroy)

module.exports = usersRouter