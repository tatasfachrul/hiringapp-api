const express = require('express')
const Route = express.Router()

const { addRegistration } = require('../controller/registration')
const { proLogin, proLogout } = require('../controller/login')

const { checkToken } = require('../helpers/middleware')

Route
  .post('/register', addRegistration)
  .post('/login', proLogin)
  .delete('/logout', checkToken, proLogout)

module.exports = Route
