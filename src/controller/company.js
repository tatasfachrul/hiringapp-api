require('dotenv/config')

const companyModel = require('../model/company')
const { response } = require('../helpers/helpers')

module.exports = {
  getCompany: (req, res) => {
    companyModel.getCompany()
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  addCompany: (req, res) => {
    const { name, logo, location, description } = req.body
    const data = {
      name,
      logo,
      location,
      description
    }
    companyModel.addCompany(data)
      .then(result => {
        response(res, 200, result)
        console.log(result.insertId) //get id AI
      })
      .catch(err => {
        console.log(err)
      })
  },
  updateCompany: (req, res) => {
    const companyId = req.params.companyId
    const { name, logo, location, description } = req.body
    const data = {
      name,
      logo,
      location,
      description
    }
    companyModel.updateCompany(data, companyId)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  deleteCompany: (req,res) => {
    const companyId = req.params.companyId

    companyModel.deleteCompany(companyId)
    .then(result => {
      response(res, 200, result)
    })
    .catch(err => {
      console.log(err)
    })
  },
  findCompanyById: (req, res) => {
    const companyId = req.params.idCompany

    companyModel.findCompanyById(companyId)
    .then(result => {
      response(res, 200, result)
    })
    .catch(err => {
      console.log(err)
    })
  },
  searchCompany: (req, res) => {
    const col = req.query.col
    const query = req.query.query
    companyModel.searchCompany(col, query)
    .then(result => {
      response(res, 200, result)
    })
    .catch(err => {
      console.log(err)
    })
  },
  sortCompany: (req, res) => {
    const col = req.query.col
    const sort = req.query.sort
    companyModel.sortCompany(col, sort)
    .then(result => {
      response(res, 200, result)
    })
    .catch(err => {
      console.log(err)
    })
  },
  pageCompany: (req, res) => {
    const limit = req.query.limit
    const offset = req.query.offset
    companyModel.pageCompany(limit, offset)
    .then(result => {
      response(res, 200, result)
    })
    .catch(err => {
      console.log(err)
    })
  }
}