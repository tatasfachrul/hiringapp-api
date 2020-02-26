const pool = require('../config/db')

module.exports = {
  addSkill: (data) => {
    return new Promise((resolve, reject) => {
      pool.query('INSERT INTO showcase SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getShowcase: () => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM showcase', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateShowcase: (data, showcaseId) => {
    return new Promise((resolve, reject) => {
      pool.query('UPDATE showcase SET ? WHERE id = ?', [data, showcaseId], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteShowcase: (showcaseId) => {
    return new Promise((resolve, reject) => {
      pool.query('DELETE FROM showcase WHERE id = ?', showcaseId, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
