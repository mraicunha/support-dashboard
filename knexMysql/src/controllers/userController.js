const database = require('../database/database')
const crypto = require('crypto')

module.exports = {
  async index(req, res) {
    try {
      const users = await database('user').select('*')
      return res.json({ users })
    } catch (error) {
      return res.json({ error })
    }
  },
  async show(req, res) { },
  async store(req, res) {
    try {
      const { name, email, password, whatsapp } = req.body
      const id = crypto.randomBytes(6).toString('HEX')

      await database('user').insert({
        id,
        name,
        email,
        password,
        whatsapp
      })
      return res.json({ id })
    } catch (error) {
      return res.json(error)
    }
  },
  async update(req, res) { },
  async destroy(req, res) { },
}