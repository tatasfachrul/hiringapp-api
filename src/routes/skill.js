const express = require('express')
const Route = express.Router()

const { addSkill, getSkill, updateSkill, deleteSkill, findSkill } = require('../controller/skill')
const { checkToken } = require('../helpers/middleware');
Route
  .post('/',checkToken, addSkill)
  .get('/', getSkill)
  .put('/:skillId',checkToken, updateSkill)
  .delete('/:skillId',checkToken, deleteSkill)
  .get('/:skillId',checkToken, findSkill)
  
module.exports = Route