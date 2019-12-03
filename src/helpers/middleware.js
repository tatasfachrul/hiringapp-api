// require('dotenv/config')

const jwt = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')
const loginModel = require('../model/login')
const { response } = require('../helpers/helpers')

const checkToken =  async (req, res, next) => {
  const token = req.headers['x-access-token']
  
  if (!token) {
    result = {
      Msg: "Please login or register"
    }
    response(res, 400, result)
  }

  var decoded = jwt_decode(token);
  const idUser = decoded.id_user
  
  await loginModel.getTokenDb(idUser)
    .then(result => {
      let tokenDb = result[0].tokenUse
      if (token == tokenDb) {
        if (typeof token != 'undefined') {
          jwt.verify(token, process.env.JWT_KEYS, (err, decoded) => {
            if (err) {
              
              result = {
                success: false,
                message: 'Token is not valid'
              }
              response(res, 400, result)
            } else {
              req.decoded = decoded
              next()
            }
          })
        } else {
          result = {
            success: false,
            message: 'Auth token is not supplied'
          }
          response(res, 400, result)
        }
      } else {
        result = {
          success: false,
          message: 'Please relogin'
        }
        response(res, 400, result)
      }
    })
    .catch(err => {
      response(res, 400, err)
    })
}

module.exports = {
  checkToken: checkToken
}