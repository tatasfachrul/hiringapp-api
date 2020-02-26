const express = require('express')
const Route = express.Router()
const {
  getCompany,
  addCompany,
  updateCompany,
  deleteCompany,
  findCompanyById,
  findCompanyByUserName,
  logoCompany
} = require('../controller/company')
const { checkToken } = require('../helpers/middleware')
const awsS3 = require('../middleware/awsS3')

Route
  .get('/', checkToken, getCompany)
  .post('/', addCompany)
  .put('/:companyId', updateCompany)
  .delete('/:companyId', checkToken, deleteCompany)
  .get('/id/:idCompany', checkToken, findCompanyById)
  .get('/user/:username', findCompanyByUserName)
  .patch('/:companyId', awsS3.upload.single('files'), logoCompany)

module.exports = Route
