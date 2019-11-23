require('dotenv/config')

const engModel = require('../model/engineer')
const { response } = require('../helpers/helpers')

module.exports = {
  addEngineer: (req, res) => {
    const { name_eng, dob, location } = req.body
    const data =  {
      name_eng,
      dob,
      location,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    engModel.addEngineer(data)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
          console.log(err)
      })
  },
  getEngineer: async (req, res) => {
    engModel.getEngineer()
    .then(results => {
      response(res, 200, results)
    })
    .catch(err => {
      response(res, 400, err)
    })    
  },
  updateEngineer: (req, res) => {
    const engineerId = req.params.engineerId
    const { name_eng, dob, location } = req.body
    const data= {
      name_eng,
      dob,
      location,
      updatedAt: new Date(),
    }
    engModel.updateEngineer(data, engineerId)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  deleteEngineer: (req,res) => {
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
    })
}
  
}