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
  getOfferByIdProjIdEng: (IdProj,IdEng) => {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM v_project WHERE id_project = '${IdProj}' AND id_eng = '${IdEng}'`, (err, result) => {
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
  getProjectByIdProj: (IdProj) => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT a.id_project, a.id_user, b.username, b.email, b.name as name_user, a.id_company, c.name as name_company, a.project_name, a.description, a.period, a.deadline, a.createdAt, a.updatedAt FROM project a LEFT JOIN user b ON a.id_user = b.id_user LEFT JOIN company c ON a.id_company = c.id_company WHERE a.id_project = ?', IdProj, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getProjectEng: (IdProj) => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT a.id_project_eng, a.id_project, a.id_eng, b.name_eng, b.id_user, a.project_job, a.fee, a.sts_project_eng, a.id_bid, a.date_accepted_eng, a.progress, b.photo, a.createdAt, b.updatedAt FROM project_eng a LEFT JOIN engineer b ON a.id_eng = b.id_eng WHERE a.id_project = ?', IdProj, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getBidFeeProjByIdBid: (IdBid) => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM tb_project_helper WHERE id = ?', IdBid, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateStsBidProjComp: (data,IdBid) => {
    return new Promise((resolve, reject) => {
      pool.query('UPDATE tb_project_helper SET ? WHERE id = ?', [data,IdBid], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
}