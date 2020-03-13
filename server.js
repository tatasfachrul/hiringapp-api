require('dotenv/config')
const server = require('express')()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { response } = require('./src/helpers/helpers')
const path = require('path')
const route = require('./src/index')
const PORT = process.env.PORT
const express = require('express')
const helmet = require('helmet')
var cors = require('cors')

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(morgan('dev'))
server.use(helmet())
server.use(cors())

server.listen(PORT, () => {
  console.log(`This server is running on port ${PORT}`)
})

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/index.html'))
})

server.use('/', route)
server.use('/uploads', express.static('src/uploads'))

module.exports = server
