const database = require('../database/database')

module.exports = {
  async index(req, res) {
    try {
      const tickets = await database('ticket')
        .join('user', 'user.id', '=', 'ticket.user_id')
        .select(['ticket.*', 'user.name', 'user.email', 'user.whatsapp'])
      return res.json({ tickets })
    } catch (error) {
      return res.json({ error })
    }
  },
  async show(req, res) {
    try {
      const { user_id } = req.headers
      const tickets = await database('ticket')
        .where('user_id', user_id)
        .select('*')
      return res.json({ tickets })
    } catch (error) {
      return res.json({ error })
    }
  },
  async store(req, res) {
    try {
      const { user_id } = req.headers
      const { title, description } = req.body

      const [id] = await database('ticket').insert({
        title,
        description,
        user_id
      })
      return res.json({ id })
    } catch (error) {
      return res.json({ error })
    }
  },
  async update(req, res) { },
  async destroy(req, res) { },
}