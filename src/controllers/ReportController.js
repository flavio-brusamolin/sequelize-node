const { Op } = require('sequelize')
const User = require('../models/User')

module.exports = {
  async show (req, res) {
    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.iLike]: '%@gmail.com'
        }
      },
      include: [
        {
          association: 'addresses',
          where: {
            street: 'Avenida Teste'
          }
        },
        {
          association: 'techs',
          required: false,
          where: {
            name: {
              [Op.iLike]: 'React%'
            }
          }
        }
      ]
    })

    return res.status(200).json(users)
  }
}
