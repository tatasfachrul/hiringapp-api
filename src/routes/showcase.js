const express = require('express')
const Route = express.Router()

const { addShowcase, getShowcase, updateShowcase, deleteShowcase } = require('../controller/showcase')
const { checkToken } = require('../helpers/middleware');
Route
  .post('/',checkToken,  addShowcase)
  .get('/',checkToken, getShowcase)
  .put('/:showcaseId',checkToken, updateShowcase)
  .delete('/:showcaseId',checkToken, deleteShowcase)
  

module.exports = Route  