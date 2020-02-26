const express = require('express')
const Route = express.Router()

const { getUsers, addUsers, updateUsers, deleteUsers, findUsers } = require('../controller/user')
const { checkToken } = require('../helpers/middleware')
Route
  .get('/', checkToken, getUsers)
  .post('/', checkToken, addUsers)
  .put('/:userId', checkToken, updateUsers)
  .delete('/:userId', checkToken, deleteUsers)
  .get('/:userId', checkToken, findUsers)

module.exports = Route
