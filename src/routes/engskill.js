const express = require('express')
const Route = express.Router()

const { addEngSkill, getEngSkill, updateEngSkill, deleteEngSkill } = require('../controller/engskill')
const { checkToken } = require('../helpers/middleware')
Route
  .post('/', checkToken, addEngSkill)
  .get('/', getEngSkill)
  .put('/:id', checkToken, updateEngSkill)
  .delete('/:id', checkToken, deleteEngSkill)

module.exports = Route
