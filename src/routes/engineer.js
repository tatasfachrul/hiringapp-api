const express = require('express')
const Route = express.Router()

const { addEngineer, 
        getEngineer, 
        updateEngineer, 
        deleteEngineer, 
        findEngByName, 
        findEngById, 
        findEngBySkill, 
        searchEng, 
        sortEng,
        paginationEng } = require('../controller/engineer')

const { checkToken } = require('../helpers/middleware');        

Route
  .post('/', checkToken, addEngineer)
  .get('/', checkToken, getEngineer)
  .put('/:engineerId', checkToken, updateEngineer)
  .delete('/:engineerId', checkToken, deleteEngineer)
  .get('/name/:nameEng', checkToken, findEngByName)
  .get('/id/:idEng', checkToken, findEngById)
  .get('/skill/:skillEng',checkToken, findEngBySkill)
  .get('/search', checkToken, searchEng)
  .get('/sort', checkToken, sortEng)
  .get('/page', checkToken, paginationEng)
    
module.exports = Route