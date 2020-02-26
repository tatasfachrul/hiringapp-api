const pool = require('../config/db')

module.exports = {
  getUsername: (name) => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM user WHERE username = ?', name, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  saveToken: (token, idUser, updateDt) => {
    return new Promise((resolve, reject) => {
      pool.query(`UPDATE user SET tokenUse = '${token}', status = '1', updatedAt = '${updateDt}' WHERE id_user = '${idUser}' `, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getTokenDb: (idUser) => {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT tokenUse FROM user WHERE id_user = '${idUser}' `, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  outTokenDb: (idUser, updateDt) => {
    return new Promise((resolve, reject) => {
      pool.query(`UPDATE user SET tokenUse = null, status = '0', updatedAt = '${updateDt}' WHERE id_user = '${idUser}' `, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }

}
