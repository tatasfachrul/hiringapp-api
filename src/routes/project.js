const express = require('express')
const Route = express.Router()

const { addProject, getProjectById, getProjectByIdEng, getOfferByIdProjIdEng, addBidFeeProj, updateStsProjEng, getProjectByIdProj, getProjectEng } = require('../controller/project')
const { checkToken } = require('../helpers/middleware');
Route
  .post('/', addProject)
  .get('/', getProjectById)
  .get('/engineer/', getProjectByIdEng)
  .get('/offer/', getOfferByIdProjIdEng)
  .post('/bid/', addBidFeeProj)
  .patch('/sts/', updateStsProjEng)
  .get('/id/:idproj', getProjectByIdProj)
  .get('/eng/:idproj', getProjectEng)
  
module.exports = Route