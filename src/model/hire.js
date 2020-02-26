const pool = require('../config/db')

module.exports = {
  addHire: (data) => {
    return new Promise((resolve, reject) => {
      pool.query('INSERT INTO project_eng SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }

}
