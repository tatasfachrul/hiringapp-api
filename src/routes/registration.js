const express = require('express')
const Route = express.Router()

const { addRegistration } = require('../controller/registration')
const { check, oneOf, validationResult } = require('express-validator')

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
  .post('/', validation, handleValidationErrors, addRegistration)

module.exports = Route
