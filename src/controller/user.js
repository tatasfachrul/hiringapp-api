require('dotenv/config')

const uuid = require('uuid/v4')
const bcrypt = require('bcryptjs')
const moment = require('moment')

const userModel = require('../model/user')
const { response } = require('../helpers/helpers')

module.exports = {
  getUsers: (req, res) => {
    userModel.getUsers()
      .then(result => {

        for (let i=0; i<result.length; i++) {
          delete result[i].password
          delete result[i].tokenUse
        }
        
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  addUsers: (req, res) => {
    const { username, password, email, name, level } = req.body

    const hash = bcrypt.hashSync(password, 10);
    const idUser = uuid();

    const data =  {
      id_user: idUser,
      username,
      password: hash,
      email,
      name,
      status: '0',
      level,
      tokenUse: null,
      createdAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
      updatedAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
    }
    userModel.addUsers(data)
      .then(result => {
        result = {
          Msg: "Submit user data successful!"
        }
        response(res, 200, result)
      })
      .catch(err => {
        response(res, 400, err)
      })
  },
  updateUsers: (req, res) => {
    const userId = req.params.userId
    const { username, password, name, email, level } = req.body
    const hash = bcrypt.hashSync(password, 10);
    const data= {
      username,
      password: hash,
      name,
      email,
      level,
      updatedAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
    }
    userModel.updateUsers(data, userId)
      .then(result => {
        result = {
          Msg: "Update user data successful!"
        }
        response(res, 200, result)
      })
      .catch(err => {
        response(res, 400, err)
      })
  },
  deleteUsers: (req,res) => {
    const userId = req.params.userId
    
    userModel.deleteUsers(userId)
    .then(result => {
      result = {
        Msg: "Delete user data successful!"
      }
      response(res, 200, result)
    })
    .catch(err => {
      response(res, 200, err)
    })
  },
  findUsers: (req, res) => {
    const userId = req.params.userId

    userModel.findUsers(userId)
    .then(result => {
      
      for (let i=0; i<result.length; i++) {
        delete result[i].password
        delete result[i].tokenUse
      }

      response(res, 200, result)
    })
    .catch(err => {
      response(res, 400, err)
    })
  }
}
