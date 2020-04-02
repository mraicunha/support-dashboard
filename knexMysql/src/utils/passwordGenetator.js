const bcrypt = require('bcrypt')

module.exports = {
  async generate(password) {
    const password = await bcrypt.hash(password, 12)
    if(password){
      return password
    }
  },
  async compare(password, hash) {

  }
}