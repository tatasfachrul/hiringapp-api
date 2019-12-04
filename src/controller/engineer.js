require('dotenv/config')

const engModel = require('../model/engineer')
const { response } = require('../helpers/helpers')
const jwt_decode = require('jwt-decode')
const moment = require('moment')
const { uploader } = require('../config/cloudinary');
const { dataUri } = require('../helpers/multer');

module.exports = {
  addEngineer: (req, res) => {
    const token = req.headers['x-access-token']
    const decoded = jwt_decode(token);
    const idUser = decoded.id_user

    const { name_eng, dob, location, no_hp, job, showcase } = req.body
    const data =  {
      name_eng,
      dob,
      location,
      no_hp,
      job,
      showcase,
      id_user: idUser,
      createdAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
      updatedAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
    }
    engModel.addEngineer(data)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        err={Msg: "Failed input to database!"}
        response(res, 400, err)
      })
  },
  photoEngineer: (req, res) => {
    

    if (req.file) {
      const file = dataUri(req).content;
      uploader.upload(file,{folder: "hiringapp/engineer/photo"}
    ).then((result) => {
       
      const engineerId = req.params.engineerId
      const data= {
        photo: result.url
      }
      console.log(data)
        engModel.photoEngineer(data, engineerId)
          .then(result => {
            response(res, 200, result)
          })
          .catch(err => {
            response(res, 200, result)
          })

      })
      .catch((err) => res.status(400).json({
        messge: 'someting went wrong while processing your request',
        data: {
          err
        }
      }))
    } else {
      response(res, 400, {msg:"no req file"})
    }
  },
  getEngineer: async (req, res) => {
    await engModel.getEngineer()
    .then(results => {
      response(res, 200, results)
    })
    .catch(err => {
      response(res, 400, err)
    })    
  },
  updateEngineer: (req, res) => {
    const engineerId = req.params.engineerId
    const { name_eng, dob, location, no_hp, job, showcase } = req.body
    const data= {
      name_eng,
      dob,
      location,
      no_hp,
      job,
      showcase,
      updatedAt: new Date(),
    }
    engModel.updateEngineer(data, engineerId)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        response(res, 400, err)
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