const database = require('../database/database')

module.exports = {
  async store(req, res) {
    const { email } = req.body
    const user = await database('user')
      .where('email', email)
      .select('name', 'email')
      .first()
    if (!user) {
      return res.status(401).json({ error: 'No User found with this e-mail' })
    }
    return res.json({ user })
  }
}