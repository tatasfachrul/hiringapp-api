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
const awsS3 = require('../middleware/awsS3')

Route
  .post('/', addEngineer)
  .get('/', getEngineer)
  .patch('/:engineerId', awsS3.upload.single('files'), photoEngineer)
  .put('/:engineerId', updateEngineer)
  .delete('/:engineerId', deleteEngineer)
  .get('/name/:nameEng', findEngByName)
  .get('/id/:idEng', findEngById)
  .get('/skill/:skillEng', findEngBySkill)
  .get('/search', getSearchSkillName)
  .get('/user/:username', findEngByUserName)

module.exports = Route
