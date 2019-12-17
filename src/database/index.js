const Sequelize = require('sequelize')
const dbSettings = require('../config/database')

const connection = new Sequelize(dbSettings)

module.exports = connection
