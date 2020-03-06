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
      pool.query('UPDATE engineer SET ? WHERE id_eng = ?', [data, engineerId], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getEngineer: (search, pagination) => {
    console.log(search)
    let paginationRole = ''
    if (pagination.limit > 0) paginationRole = `LIMIT ${pagination.offset}, ${pagination.limit}`

    console.log(paginationRole)
    return new Promise((resolve, reject) => {
      pool.query(`SELECT engineer.id_eng,
      engineer.name_eng AS name,
      engineer.job,
      engineer.name_skill AS skill,
      project.totalProject,
      project.successProject,
      project.rateSuccess,
      engineer.id_user,
      engineer.username,
      engineer.email,
      engineer.dob,
      engineer.location,
      engineer.photo,
      engineer.showcase
FROM v_engineer AS engineer
LEFT JOIN
 (SELECT id_eng AS ideng,
         sum(IF(sts_project_eng='2', TRUE, FALSE)) AS totalProject,
         sum(IF(progress='1', TRUE, FALSE)) AS successProject,
         ((sum(IF(progress='1', TRUE, FALSE))/sum(IF(sts_project_eng='2', TRUE, FALSE)))*100) AS rateSuccess
  FROM project_eng
  GROUP BY id_eng) AS project ON engineer.id_eng = project.ideng WHERE engineer.name_eng LIKE '%${search.searchName}%' AND engineer.name_skill LIKE '%${search.searchSkill}%' ${paginationRole}`, (err, result) => {
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
      pool.query('UPDATE engineer SET ? WHERE id_eng = ?', [data, engineerId], (err, result) => {
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
      pool.query('SELECT * FROM v_engineer WHERE name_eng LIKE ? ', ['%' + nameEng + '%'], (err, result) => {
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
      pool.query(`SELECT * FROM v_engineer LEFT JOIN (SELECT id_eng as ideng, sum(IF(sts_project_eng='2', true, false)) AS totalProj, sum(IF(progress='1', true, false)) AS successProj, ((sum(IF(progress='1', true, false))/sum(IF(sts_project_eng='2', true, false)))*100) as rateSuccess FROM project_eng  
      GROUP BY id_eng) AS proj ON v_engineer.id_eng = proj.ideng WHERE id_eng LIKE ? `, ['%' + idEng + '%'], (err, result) => {
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
      pool.query('SELECT * FROM v_engineer WHERE name_skill LIKE ? ', ['%' + skillEng + '%'], (err, result) => {
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
      const userId = `${idUser}`
      pool.query('SELECT * FROM engineer WHERE id_user = ?', [userId], (err, result) => {
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
      const user = `${userName}`
      pool.query('SELECT * FROM v_engineer WHERE username = ?', [user], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  searchEngSkill: (skillName) => {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM v_engineer WHERE name_skill LIKE '%${skillName}%' OR  name_eng LIKE '%${skillName}%' OR job LIKE '%${skillName}%' `, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  countEngineer: () => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT COUNT(*) count FROM v_engineer', (err, result) => {
        console.log(result)
        if (!err) {
          resolve(result[0].count)
        } else {
          reject(new Error(err))
        }
      })
    })
  }

}
