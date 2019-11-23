const express = require('express')
const Route = express.Router()

const { getCompany, addCompany, updateCompany, deleteCompany, findCompanyById } = require('../controller/company')

const { checkToken } = require('../helpers/middleware');

Route
  .get('/', checkToken, getCompany)
  .post('/', checkToken, addCompany)
  .put('/:companyId', checkToken, updateCompany)
  .delete('/:companyId', checkToken, deleteCompany)
  .get('/id/:idCompany', checkToken, findCompanyById)
 
module.exports = Route  