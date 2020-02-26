const express = require('express')
const Route = express.Router()

const { validator } = require('express-validator')
const { check, oneOf, validationResult } = require('express-validator')

const { addRegistration } = require('../controller/registration')
const { proLogin, proLogout } = require('../controller/login')

const { checkToken } = require('../helpers/middleware')

const validation = [
  oneOf([
    check('username')
      .exists()
      .withMessage('username is required')
      .isLength({ min: 3 })
      .withMessage('wrong username length')
  ]),
  check('password')
    .exists()
    .withMessage('password is required')
]

function handleValidationErrors (req, res, next) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    console.log('error')
    return res.status(422).json({ errors: errors.array() })
  }

  next()
};

Route
  .post('/register', addRegistration)
  .post('/login', proLogin)
  .delete('/logout', checkToken, proLogout)

module.exports = Route
