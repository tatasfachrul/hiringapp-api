const pool = require('../config/db')

module.exports = {
  addHire: (data) => {
    return new Promise((resolve, reject) => {
      pool.query('INSERT INTO hire SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
 
  
}