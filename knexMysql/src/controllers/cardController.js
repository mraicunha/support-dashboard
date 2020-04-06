const database = require('../database/database')

module.exports = {
  async index(req, res) {
    try {
      const cards = await database('card').select('*')
      return res.json({ cards })
    } catch (error) {
      return res.json({ error })
    }
  },
  async store(req, res) {
    try {
      const { header, body, footer, router } = req.body

      const card = await database('card').insert({
        header,
        body,
        footer,
        router
      })

      return res.json({ card })

    } catch (error) {
      return res.json({ error })
    }
  }
}