const express = require('express')
const Route = express.Router()

const { addProject, getProjectById } = require('../controller/project')
// const { checkToken } = require('../helpers/middleware');
Route
  .post('/', addProject)
  .get('/', getProjectById)
  
module.exports = Route