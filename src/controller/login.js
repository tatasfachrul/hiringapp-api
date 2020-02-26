require('dotenv/config')

const jwt_decode = require('jwt-decode')
const moment = require('moment')
const loginModel = require('../model/login')
const { response } = require('../helpers/helpers')
const { validateLogin } = require('../helpers/auth')

module.exports = {
  proLogin: async (req, res) => {
    const data = {
      username: req.body.username,
      password: req.body.password
    }

    try {
      const UserData = await loginModel.getUsername(data.username)
      const result = await validateLogin(res, data, UserData)
      // response(res, 200, result)
    } catch (error) {
      console.log(error)
      console.log(result.result)
    }
  },
  proLogout: (req, res) => {
    const token = req.headers['x-access-token']
    var decoded = jwt_decode(token)
    const idUser = decoded.id_user
    const updateDt = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')

    loginModel.outTokenDb(idUser, updateDt)
      .then(result => {
        result = {
          Msg: 'Logout Successfully!'
        }
        response(res, 200, result)
      })
      .catch(err => {
        err = {
          Msg: 'Failed to logout'
        }
        response(res, 400, err)
      })
  }

}
