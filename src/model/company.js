const pool = require('../config/db')

module.exports = {
  getCompany: () => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM company', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  addCompany: (data) => {
    return new Promise((resolve, reject) => {
      pool.query('INSERT INTO company SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateCompany: (data, companyId) => {
    return new Promise((resolve, reject) => {
      pool.query('UPDATE company SET ? WHERE id_company = ?', [data, companyId], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteCompany: (companyId) => {
    return new Promise((resolve, reject) => {
      pool.query('DELETE FROM company WHERE id_company = ?', companyId, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  findCompanyById: (companyId) => {
    return new Promise((resolve, reject) => {
      idCompany = `${companyId}`
      pool.query('SELECT * FROM company WHERE id_company = ?', [idCompany], (err,result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  searchCompany: (col, query) => {
    return new Promise((resolve, reject) => {
      // colDB = `${col}`
      querySearch = `%${query}%`
      pool.query(`SELECT * FROM company WHERE ${col} LIKE ?`, [querySearch], (err,result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  sortCompany: (col, sort) => {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM company ORDER BY ${col} ${sort}`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  pageCompany: (limit, offset) => {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM company LIMIT ${limit} OFFSET ${offset}`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
}