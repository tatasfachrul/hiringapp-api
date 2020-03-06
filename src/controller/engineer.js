require('dotenv/config')

const _ = require('lodash')
const engModel = require('../model/engineer')
const { response } = require('../helpers/helpers')
const jwtDecode = require('jwt-decode')
const moment = require('moment')

module.exports = {
  addEngineer: (req, res) => {
    const token = req.headers['x-access-token']
    const decoded = jwtDecode(token)
    const idUser = decoded.id_user

    const { name_eng, dob, location, no_hp, job, showcase } = req.body
    const data = {
      name_eng,
      dob,
      location,
      no_hp,
      job,
      showcase,
      id_user: idUser,
      createdAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
      updatedAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    }
    engModel.addEngineer(data)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
        err = { Msg: 'Failed input to database!' }
        response(res, 400, err)
      })
  },
  photoEngineer: (req, res) => {
    try {
      const engineerId = req.params.engineerId
      let dataFile = {}
      if (!_.result(req.file, 'key')) {
        console.log(req.file)
        return res.json('Invalid')
      } else {
        dataFile = {
          file: req.file.key,
          url: process.env.AWS_BucketEndpoint + '/' + req.file.key
        }
      }
      console.log(req.file.location)
      const data = {
        photo: dataFile.url
      }
      console.log(data)
      engModel.photoEngineer(data, engineerId)
        .then(result => response(res, 200, result))
        .catch(error => response(res, 200, error))
    } catch (error) {
      response(res, 400, error)
    }
  },

  getEngineer: async (req, res) => {
    const searchName = req.query.name || ''
    const searchSkill = req.query.skill || ''

    const page = parseInt(req.query.page) < 0 ? 0 : parseInt(req.query.page) - 1 || 0
    const limit = parseInt(req.query.limit) || 25
    const offset = page === 1 ? 0 : (limit * page)

    const count = await engModel.countEngineer()
    console.log(count)
    const totalPage = Math.ceil(count / limit)

    await engModel.getEngineer({ searchName, searchSkill }, { limit, offset })
      .then(results => {
        response(res, 200, results, { page, limit, count, totalPage })
      })
      .catch(err => {
        response(res, 400, err)
      })
  },
  updateEngineer: (req, res) => {
    const engineerId = req.params.engineerId
    const { name_eng, dob, location, no_hp, job, showcase } = req.body
    const data = {
      name_eng,
      dob,
      location,
      no_hp,
      job,
      showcase,
      updatedAt: new Date()
    }
    engModel.updateEngineer(data, engineerId)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        response(res, 400, err)
      })
  },
  deleteEngineer: (req, res) => {
    const engineerId = req.params.engineerId

    engModel.deleteEngineer(engineerId)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  findEngByName: (req, res) => {
    const nameEng = req.params.nameEng

    engModel.findEngByName(nameEng)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  findEngById: (req, res) => {
    const idEng = req.params.idEng

    engModel.findEngById(idEng)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  findEngBySkill: (req, res) => {
    const skillEng = req.params.skillEng

    engModel.findEngBySkill(skillEng)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  getSearch: (req, res) => {
    const engName = req.query.engName
    const skillName = req.query.skillName
    const sortParam = req.query.sortParam
    const sortChoose = req.query.sortChoose
    const limit = req.query.limit
    const offset = req.query.offset

    engModel.searchEngineer(engName, skillName, sortParam, sortChoose, limit, offset)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
        response(res, 400, 'Something goes Wrong!')
      })
  },
  findEngByUserName: (req, res) => {
    const userName = req.params.username

    engModel
      .findEngByUserName(userName)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  getSearchSkillName: (req, res) => {
    const skillName = req.query.skillName

    if (skillName === '') {
      engModel.getEngineer()
        .then(results => {
          response(res, 200, results)
        })
        .catch(err => {
          response(res, 400, err)
        })
    } else {
      engModel.searchEngSkill(skillName)
        .then(result => {
          response(res, 200, result)
        })
        .catch(err => {
          if (err) {
            const result = {
              Message: 'Search error!'
            }
            response(res, 400, result)
          }
        })
    }
  }

}
