const Address = require('../models/Address')
const User = require('../models/User')

module.exports = {
  async list (req, res) {
    const { userId } = req.params

    const { addresses } = await User.findByPk(userId, {
      include: { association: 'addresses' }
    })

    res.status(200).json(addresses)
  },

  async store (req, res) {
    const { userId } = req.params
    const { zipcode, street, number } = req.body

    const user = await User.findByPk(userId)
    if (!user) {
      return res.status(400).json({
        error: 'User not found'
      })
    }

    const address = await Address.create({
      zipcode,
      street,
      number,
      user_id: userId
    })

    return res.status(201).json(address)
  }
}
