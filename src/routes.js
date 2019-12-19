const { Router } = require('express')
const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')
const TechController = require('./controllers/TechController')
const ReportController = require('./controllers/ReportController')

const routes = Router()

routes.get('/users', UserController.list)
routes.post('/users', UserController.store)

routes.get('/users/:userId/addresses', AddressController.list)
routes.post('/users/:userId/addresses', AddressController.store)

routes.get('/users/:userId/techs', TechController.list)
routes.post('/users/:userId/techs', TechController.store)
routes.delete('/users/:userId/techs/:techId', TechController.delete)

routes.get('/report', ReportController.show)

module.exports = routes
