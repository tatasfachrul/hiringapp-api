const express = require('express')
const Route = express.Router()
const {
  addEngineer,
  getEngineer,
  updateEngineer,
  deleteEngineer,
  findEngByName,
  findEngById,
  findEngBySkill,
  photoEngineer,
  findEngByUserName,
  getSearchSkillName

} = require('../controller/engineer')
const { multerUploads } = require('../helpers/multer')
const { cloudinaryConfig } = require('../config/cloudinary')

Route
  .use('*', cloudinaryConfig)
  .post('/', addEngineer)
  .get('/', getEngineer)
  .patch('/:engineerId', multerUploads.single('photo'), photoEngineer)
  .put('/:engineerId', updateEngineer)
  .delete('/:engineerId', deleteEngineer)
  .get('/name/:nameEng', findEngByName)
  .get('/id/:idEng', findEngById)
  .get('/skill/:skillEng', findEngBySkill)
  .get('/search', getSearchSkillName)
  .get('/user/:username', findEngByUserName)

module.exports = Route
