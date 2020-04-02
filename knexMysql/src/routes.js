const express = require('express')
const userController = require('./controllers/userController')
const ticketController = require('./controllers/ticketController')
const sessionController = require('./controllers/sessionController')

const routes = express.Router()

routes.get('/users', userController.index)
routes.post('/users', userController.store)

routes.post('/session', sessionController.store)

routes.get('/tickets', ticketController.index)
routes.get('/ticketsuser', ticketController.show)
routes.post('/tickets', ticketController.store)

module.exports = routes