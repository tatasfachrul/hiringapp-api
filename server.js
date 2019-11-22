require('dotenv/config')
const server = require('express')()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { response } = require('./src/helpers/helpers')
const route = require('./src/index');
const PORT = process.env.PORT

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(morgan('dev'))
// server.use(expressValidator())

server.listen(PORT, () => {
  console.log(`This server is running on port ${PORT}`)
})

server.get('/', (req, res) => {
  response(res, 200, "Hello from the Node JS RESTful side!", )
})

server.use('/', route)

module.exports = server




