const express = require('express')
const Route = express.Router()

const auth = require('./routes/auth')
const user = require('./routes/user')
const company = require('./routes/company')
const engineer = require('./routes/engineer')
const skill = require('./routes/skill')
const showcase = require('./routes/showcase')
const engskill = require('./routes/engskill')
const hire = require('./routes/hire')
const project = require('./routes/project')

Route
  .use('/auth', auth)
  .use('/users', user)
  .use('/company', company)
  .use('/engineer', engineer)
  .use('/skill', skill)
  .use('/showcase', showcase)
  .use('/engskill', engskill)
  .use('/hire', hire)
  .use('/project', project)
  .use('/uploads', express.static('uploads'))
  // .use('*', cloudinaryConfig);

module.exports = Route
