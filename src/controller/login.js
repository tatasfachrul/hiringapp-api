require('dotenv/config')

const jwtDecode = require('jwt-decode')
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
      await validateLogin(res, data, UserData)
      // console.log(result.result)
      // response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 400, error)
    }
  },
  proLogout: (req, res) => {
    const token = req.headers['x-access-token']
    var decoded = jwtDecode(token)
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
