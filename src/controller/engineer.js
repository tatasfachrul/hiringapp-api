require('dotenv/config')

const engModel = require('../model/engineer')
const async = require('async')
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
  getEngineer: (req, res) => {
    engModel.getEngineer()
      .then(result => {
       
        
      //  async.eachSeries(result, (item, done) => {
      //     // console.log(item.idEng)
      //     engModel.getSkill(item.id_eng)
      //       .then(results => {
      //         let data = {
      //           id: item.id_eng,
      //           name_eng: item.name_eng,
      //           dob: item.dob,
      //           location: item.dob,
      //           no_hp: item.no_hp,
      //           skill: results,
      //           tes: item.no_hp,
      //         }
      //         // item.push(results)
      //         console.log(data)
      //         // console.log(data)
      //       })
      //       .catch(err => {
      //         console.log(err)
      //       })
      //   })
        
        response(res, 200, result)
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
  searchEng: (req, res) => {
    const nameEng = req.query.nameEng
    const skillEng = req.query.skillEng
    engModel.searchEng(nameEng,skillEng)
    .then(result => {
      response(res, 200, result)
    })
    .catch(err => {
      console.log(err)
    })
  },
  sortEng: (req, res) => {
    const colName = req.query.colName
    const sort = req.query.sort
    engModel.sortEng(colName,sort)
    .then(result => {
      response(res, 200, result)
    })
    .catch(err => {
      err = {
        Msg: "Data not found"
      }
      response(res, 400, Msg)
    })
  },
  paginationEng: (req, res) => {
    const limit = req.query.limit
    const offset = req.query.offset
    engModel.paginationEng(limit, offset)
    .then(result => {
      response(res, 200, result)
    })
    .catch(err => {
      console.log(err)
    })
  }
  
}