const pool = require('../config/db')

module.exports = {
  getUsers: () => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM user', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  addUsers: (data) => {
    return new Promise((resolve, reject) => {
      pool.query('INSERT INTO user SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateUsers: (data, userId) => {
    return new Promise((resolve, reject) => {
      pool.query('UPDATE user SET ? WHERE id_user= ?', [data, userId], (err, result)=> {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }  
      })
    })
  },
  deleteUsers: (userId) => {
    return new Promise((resolve, reject) => {
      pool.query('DELETE FROM user WHERE id_user = ?', userId, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  findUsers: (userId) => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM user WHERE id_user = ?', userId, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
