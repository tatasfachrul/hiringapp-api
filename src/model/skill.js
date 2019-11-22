const pool = require('../config/db')

module.exports = {
  addSkill: (data) => {
    return new Promise((resolve, reject) => {
      pool.query('INSERT INTO skill SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getSkill: () => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM skill', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateSkill: (data, skillId) => {
    return new Promise((resolve, reject) => {
      pool.query('UPDATE skill SET ? WHERE id_skill = ?', [data, skillId], (err, result)=> {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }  
      })
    })
  },
  deleteSkill: (skillId) => {
    return new Promise((resolve, reject) => {
      pool.query('DELETE FROM skill WHERE id_skill = ?', skillId, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  findSkill: (skillId) => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM skill WHERE id_skill = ?', skillId, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}