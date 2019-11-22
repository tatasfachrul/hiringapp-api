const express = require('express')
const Route = express.Router()

const { getCompany, addCompany, updateCompany, deleteCompany, findCompanyById, searchCompany, sortCompany, pageCompany } = require('../controller/company')

const { checkToken } = require('../helpers/middleware');

Route
  .get('/', checkToken, getCompany)
  .post('/', checkToken, addCompany)
  .put('/:companyId', checkToken, updateCompany)
  .delete('/:companyId', checkToken, deleteCompany)
  .get('/id/:idCompany', checkToken, findCompanyById)
  .get('/search', checkToken, searchCompany)
  .get('/sort', checkToken, sortCompany)
  .get('/page', checkToken, pageCompany)
 

module.exports = Route  