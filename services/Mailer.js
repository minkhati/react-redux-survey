const sendgrid = require('sendgrid');
const helper = sendgrid.mail; // ES6 const { mail } = sendgrid
const keys = require('../config/keys');

class Mailer extends helper.Mail {}

module.exports = Mailer;
