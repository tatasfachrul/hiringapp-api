const pool = require('../config/db')

module.exports = {
  addEngineer: (data) => {
    return new Promise((resolve, reject) => {
      pool.query('INSERT INTO engineer SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  photoEngineer: (data, engineerId) => {
    return new Promise((resolve, reject) => {
      pool.query('UPDATE engineer SET ? WHERE id_eng = ?', [data, engineerId], (err, result)=> {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }  
      })
    })
  },
  getEngineer: () => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM v_engineer', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getSkill: (idEng) => {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM skill_eng WHERE id_eng = ${idEng}`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }  
      })
    })
  },
  updateEngineer: (data, engineerId) => {
    return new Promise((resolve, reject) => {
      pool.query('UPDATE engineer SET ? WHERE id_eng = ?', [data, engineerId], (err, result)=> {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }  
      })
    })
  },
  deleteEngineer: (engineerId) => {
    return new Promise((resolve, reject) => {
      pool.query('DELETE FROM engineer WHERE id_eng = ?', engineerId, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  findEngByName: (nameEng) => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM v_engineer WHERE name_eng LIKE ? ', [`%`+nameEng+`%`], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  findEngById: (idEng) => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM v_engineer WHERE id_eng LIKE ? ', [`%`+idEng+`%`], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  findEngBySkill: (skillEng) => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM v_engineer WHERE name_skill LIKE ? ', [`%`+skillEng+`%`], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  searchEngineer: (engName, skillName, sortParam, sortChoose, limit, offset) => {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM v_engineer WHERE name_eng LIKE '%${engName}%' OR name_skill LIKE '%${skillName}%' ORDER BY ${sortParam} ${sortChoose} LIMIT ${limit} OFFSET ${offset}`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  findEngineerByIdUser: (idUser) => {
    return new Promise((resolve, reject) => {
      id_user = `${idUser}`
      pool.query('SELECT * FROM engineer WHERE id_user = ?', [id_user], (err,result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  findEngByUserName: (userName) => {
    return new Promise((resolve, reject) => {
      user = `${userName}`
      pool.query('SELECT * FROM v_engineer WHERE username = ?', [user], (err,result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  
}