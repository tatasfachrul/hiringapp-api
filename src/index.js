const express = require('express')
const Route = express.Router()

const auth = require('./routes/auth')
const user = require('./routes/user')
const company = require('./routes/company')
const engineer = require('./routes/engineer')
const skill = require('./routes/skill')
const showcase = require('./routes/showcase')
const engskill = require('./routes/engskill')

Route
  .use('/auth', auth)
  .use('/users', user)
  .use('/company', company)
  .use('/engineer', engineer)
  .use('/skill', skill)
  .use('/showcase', showcase)
  .use('/engskill', engskill)
  
module.exports = Route