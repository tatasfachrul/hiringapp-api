const pool = require('../config/db')

module.exports = {
  addEngSkill: (data) => {
    return new Promise((resolve, reject) => {
      pool.query('INSERT INTO skill_eng SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getEngSkill: () => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM skill_eng', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateEngSkill: (data, skillId) => {
    return new Promise((resolve, reject) => {
      pool.query('UPDATE skill_eng SET ? WHERE id = ?', [data, skillId], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteEngSkill: (skillId) => {
    return new Promise((resolve, reject) => {
      pool.query('DELETE FROM skill_eng WHERE id = ?', skillId, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
