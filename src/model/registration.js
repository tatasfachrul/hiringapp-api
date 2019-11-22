const pool = require('../config/db')

module.exports = {
  addRegistration: (data) => {
    return new Promise ((resolve, reject) => {
      pool.query('INSERT INTO user SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      }) 
   })  
  },
  checkUsername: (usernm) => {
    return new Promise ((resolve, reject) => {
      const username = `${usernm}`
      pool.query('SELECT username FROM user WHERE username = ?', username, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}