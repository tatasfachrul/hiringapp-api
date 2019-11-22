require('dotenv/config')

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const { response } = require('../helpers/helpers')
const loginModel = require('../model/login')
const moment = require('moment');

module.exports = {
  validateLogin: (reqData, UserData) => {
    if (UserData.length != 0) {
      let passFromReq = reqData.password
      let passFromSql = UserData[0].password
       
      if ( bcrypt.compareSync(passFromReq, passFromSql)) {
        const tokenDb = jwt.sign({id_user: UserData[0].id_user, username: UserData[0].username, email: UserData[0].email, level: UserData[0].level }, process.env.JWT_KEYS, { expiresIn: process.env.JWT_EXP })
        let updateDt = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
        
        loginModel.saveToken(tokenDb, UserData[0].id_user, updateDt)
        // console.log(UserData[0].id_user)
        
        // const iduser = UserData[0].id_user
        // loginModel.getTokenDb(iduser)
        // .then(result => {
        //   console.log(result)
        //   // response(res, 200, result)
        // })
        // .catch(err => {
        //   console.log(err)
        // })
        return({
          success: true,
          message: 'Authentication successful!',
          token: tokenDb
        })
      } else {
        return({
          success: false,
          message: 'Authentication failed! Please check the request'
        })
      } 
    } else {
      return "Wrong username"
    }
  }
}

// export default ValidateLogin