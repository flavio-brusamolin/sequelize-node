const Tech = require('../models/Tech')
const User = require('../models/User')

module.exports = {
  async list (req, res) {
    const { userId } = req.params

    const { techs } = await User.findByPk(userId, {
      include: { association: 'techs', through: { attributes: [] } }
    })

    return res.status(200).json(techs)
  },

  async store (req, res) {
    const { userId } = req.params
    const { name } = req.body

    const user = await User.findByPk(userId)
    if (!user) {
      return res.status(400).json({
        error: 'User not found'
      })
    }

    const [tech] = await Tech.findOrCreate({
      where: { name }
    })

    await user.addTech(tech)

    return res.status(201).json(tech)
  },

  async delete (req, res) {
    const { userId, techId } = req.params

    const user = await User.findByPk(userId)
    if (!user) {
      return res.status(400).json({
        error: 'User not found'
      })
    }

    const tech = await Tech.findByPk(techId)
    if (!tech) {
      return res.status(400).json({
        error: 'Tech not found'
      })
    }

    await user.removeTech(tech)

    return res.status(200).json({
      message: 'Relationship destroyed'
    })
  }
}
