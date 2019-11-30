const express = require('express')
const Route = express.Router()

const { addHire } = require('../controller/hire')
const { checkToken } = require('../helpers/middleware');
Route
  .post('/', addHire)
  .get('/', addHire)
  
module.exports = Route