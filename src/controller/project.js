require('dotenv/config')

const projectModel = require('../model/project')
const companyModel = require('../model/company')
const { response } = require('../helpers/helpers')
const jwt_decode = require('jwt-decode')
const moment = require('moment')

module.exports = {
  addProject: async (req, res) => {
    const token = req.headers['x-access-token']
    const decoded = jwt_decode(token)
    const idUser = decoded.id_user
    try {
      let getIdComp = await companyModel.findCompanyByIdUser(idUser)
      var idComp = getIdComp[0].id_company
    } catch (error) {
      console.log(error)
    }
    
    const { project_name, description, period, deadline } = req.body
    const data =  {
      project_name,
      description,
      period,
      deadline,
      id_company: idComp,
      id_user: idUser,
      createdAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
      updatedAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
    }

    projectModel.addProject(data)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        err={Msg: "Failed input to database!"}
        response(res, 400, err)
      })
  },
  getProjectById: async (req, res) => {
    const token = req.headers['x-access-token']
    const decoded = jwt_decode(token);
    const IdUserComp = decoded.id_user

    try {
      let getIdComp = await companyModel.findCompanyByIdUser(IdUserComp)
      var idComp = getIdComp[0].id_company
      console.log(getIdComp);
    } catch (error) {
      console.log(error)
    }

    projectModel.getProjectByIdComp(idComp)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        response(res, 400, err)
      })
  },
  
  
}