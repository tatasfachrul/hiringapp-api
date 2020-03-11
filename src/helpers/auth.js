require('dotenv/config')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { response } = require('../helpers/helpers')
const loginModel = require('../model/login')
const moment = require('moment')

module.exports = {
  validateLogin: async (res, reqData, UserData) => {
    if (UserData.length !== 0) {
      const passFromReq = reqData.password
      const passFromSql = UserData[0].password

      if (bcrypt.compareSync(passFromReq, passFromSql)) {
        const tokenDb = jwt.sign(
          {
            id_user: UserData[0].id_user,
            username: UserData[0].username,
            email: UserData[0].email,
            level: UserData[0].level
          },
          process.env.JWT_KEYS,
          { expiresIn: process.env.JWT_EXP }
        )
        const updateDt = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
        const dataCompany = await loginModel.getCompany(UserData[0].id_user)

        loginModel.saveToken(tokenDb, UserData[0].id_user, updateDt)

        return response(res, 200, {
          idUser: UserData[0].id_user,
          idCompany: dataCompany[0].id_company,
          token: tokenDb,
          level: UserData[0].level
        })
      } else {
        return response(res, 400, {
          success: false,
          message: 'Authentication failed, please cek your request!'
        })
      }
    } else {
      return response(res, 401, {
        success: false,
        message: 'Wrong Username or Password!'
      })
    }
  }
}
