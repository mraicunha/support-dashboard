const express = require('express')
const userController = require('./controllers/userController')
const ticketController = require('./controllers/ticketController')
const sessionController = require('./controllers/sessionController')
const cardController = require('./controllers/cardController')

const routes = express.Router()

routes.get('/users', userController.index)
routes.post('/users', userController.store)

routes.post('/session', sessionController.store)

routes.get('/tickets', ticketController.index)
routes.get('/ticketsuser', ticketController.show)
routes.post('/tickets', ticketController.store)

routes.get('/cards', cardController.index)
routes.post('/cards', cardController.store)

module.exports = routes