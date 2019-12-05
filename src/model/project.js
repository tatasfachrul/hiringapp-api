const pool = require('../config/db')

module.exports = {
  addProject: (data) => {
    return new Promise((resolve, reject) => {
      pool.query('INSERT INTO project SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getProjectByIdComp: (idComp) => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM project WHERE id_company = ?', idComp,(err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getProjectByIdEng: (IdEng) => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM v_project WHERE id_eng = ?', IdEng, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getProjectByIdProj: (IdProj) => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM v_project WHERE id_project = ?', IdProj, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  addBidFeeProj: (data) => {
    return new Promise((resolve, reject) => {
      pool.query('INSERT INTO tb_project_helper SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateStsProjEng: (data, idProjEng) => {
    return new Promise((resolve, reject) => {
      pool.query('UPDATE project_eng SET ? WHERE id_project_eng = ?', [data, idProjEng], (err, result)=> {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }  
      })
    })
  },
}