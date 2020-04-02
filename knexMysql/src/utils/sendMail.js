const nodemailer = require('nodemailer')

module.exports = {
  async sendMailError(msg, func) {
    try {

      const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        secureConnection: false,
        port: 587,
        tls: {
          ciphers: 'SSLv3'
        },
        auth: {
          user: 'mraicunha@outlook.com',
          pass: 'tux!!94instagram'
        }
      });

      const info = await transporter.sendMail({
        from: '<mraicunha@outlook.com>', // sender address
        to: 'marcosraicunha@gmail.com', // list of receivers
        subject: 'Error IDC19 Campus Conectado Backend ⚠', // Subject line
        text: `Erro ao exeucar a função '${func}',
O erro que ocorreu foi: ${msg}`, // plain text body
      });


    } catch (error) {
      console.error(error);

    }
  }
}