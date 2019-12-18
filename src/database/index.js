const Sequelize = require('sequelize')
const dbSettings = require('../config/database')
const User = require('../models/User')

const connection = new Sequelize(dbSettings)

User.init(connection)
