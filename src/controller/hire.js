require('dotenv/config')

const hireModel = require('../model/hire')
const companyModel = require('../model/company')
const { response } = require('../helpers/helpers')
const jwt_decode = require('jwt-decode')
const moment = require('moment')

module.exports = {
  addHire: async (req, res) => {
    const token = req.headers['x-access-token']
    console.log(token);
    const decoded = jwt_decode(token);
    const idUser = decoded.id_user
    console.log(idUser);
    try {
      let getIdComp = await companyModel.findCompanyByIdUser(idUser)
      
      var idComp = getIdComp[0].id_company
      console.log(idComp);
    } catch (error) {
      console.log(error)
    }
    
    const { project_name, description, period, deadline, salary, id_eng } = req.body
    const data =  {
      project_name,
      description,
      period,
      deadline,
      salary,
      id_eng,
      id_company: idComp,
      id_user: idUser,
      createdAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
      updatedAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
    }

    hireModel.addHire(data)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        err={Msg: "Failed input to database!"}
        response(res, 400, err)
      })
  },
  
  
}