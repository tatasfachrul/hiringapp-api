const express = require('express')
const Route = express.Router()
const { getCompany, addCompany, updateCompany, deleteCompany, findCompanyById } = require('../controller/company')
const { checkToken } = require('../helpers/middleware');
const { multerUploads } = require('../helpers/multer');
const { cloudinaryConfig } = require('../config/cloudinary');

Route
  .use('*', cloudinaryConfig)
  .get('/', checkToken, getCompany)
  .post('/', checkToken, multerUploads.single('logo'), addCompany)
  .put('/:companyId', checkToken, updateCompany)
  .delete('/:companyId', checkToken, deleteCompany)
  .get('/id/:idCompany', checkToken, findCompanyById)

module.exports = Route  