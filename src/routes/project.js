const express = require('express')
const Route = express.Router()

const { addProject, getProjectById, getProjectByIdEng, getProjectByIdProj, addBidFeeProj, updateStsProjEng } = require('../controller/project')
const { checkToken } = require('../helpers/middleware');
Route
  .post('/', addProject)
  .get('/', getProjectById)
  .get('/engineer/', getProjectByIdEng)
  .get('/:idProj', getProjectByIdProj)
  .post('/bid/', addBidFeeProj)
  .patch('/sts/', updateStsProjEng)
  
module.exports = Route