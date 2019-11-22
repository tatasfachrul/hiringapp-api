require('dotenv/config')

const uuid = require('uuid/v4')
const bcrypt = require('bcryptjs')
// const expressValidator = require('express-validator')
const { check, validationResult } = require('express-validator')
const moment = require('moment')
const jwt = require('jsonwebtoken')

const userRegistration = require('../model/registration')
const { response } = require('../helpers/helpers')


module.exports = {
  addRegistration: (req, res) => {
    const { username, password, email, name, level } = req.body

    var hash = bcrypt.hashSync(password, 10);
    const idUser = uuid();
    const token = jwt.sign({id_user: idUser, username: username, email: email, level: level }, process.env.JWt_KEYS, { expiresIn: process.env.JWT_EXP })

    const data = {
      id_user: idUser,
      username,
      password: hash,
      email,
      name,
      status: '0',
      level,
      tokenUse: token,
      createdAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
      updatedAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
    }

    userRegistration.addRegistration(data)
      .then(result => {
        result = {
          msg: "Registration successful"
        }
        response(res, 200, result)
      })
      .catch(err => {
        ress = {
          msg: "Registration failed"
        }
        response(res, 400, ress)
      })
  }
}