require('dotenv/config')

const projectModel = require('../model/project')
const companyModel = require('../model/company')
const engmodel = require('../model/engineer')
const { response } = require('../helpers/helpers')
const jwtDecode = require('jwt-decode')
const moment = require('moment')

module.exports = {
  addProject: async (req, res) => {
    const token = req.headers['x-access-token']
    const decoded = jwtDecode(token)
    const idUser = decoded.id_user
    try {
      const getIdComp = await companyModel.findCompanyByIdUser(idUser)
      var idComp = getIdComp[0].id_company
    } catch (error) {
      response(res, 400, error)
    }

    const { project_name, description, period, deadline } = req.body
    const data = {
      project_name,
      description,
      period,
      deadline,
      id_company: idComp,
      id_user: idUser,
      createdAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
      updatedAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    }

    projectModel.addProject(data)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
        err = { Msg: 'Failed input to database!' }
        response(res, 400, err)
      })
  },
  getProjectById: async (req, res) => {
    const token = req.headers['x-access-token']
    const decoded = jwtDecode(token)
    const IdUserComp = decoded.id_user
    // console.log(IdUserComp)
    try {
      const getIdComp = await companyModel.findCompanyByIdUser(IdUserComp)
      var idComp = getIdComp[0].id_company
      // console.log(getIdComp);
    } catch (error) {
      response(res, 400, error)
    }

    projectModel.getProjectByIdComp(idComp)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        response(res, 400, err)
      })
  },
  getProjectByIdEng: async (req, res) => {
    const token = req.headers['x-access-token']
    const decoded = jwtDecode(token)
    const user_eng = decoded.id_user
    try {
      const getIdEng = await engmodel.findEngineerByIdUser(user_eng)
      var idEng = getIdEng[0].id_eng
      console.log(getIdEng)
    } catch (error) {
      response(res, 400, error)
    }

    projectModel.getProjectByIdEng(idEng)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        response(res, 400, err)
      })
  },
  getOfferByIdProjIdEng: async (req, res) => {
    const IdProj = req.query.idProj
    const IdEng = req.query.idEng

    projectModel.getOfferByIdProjIdEng(IdProj, IdEng)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        response(res, 400, err)
      })
  },
  addBidFeeProj: async (req, res) => {
    const { id_project_eng, fee_bid, desc_nego_proj } = req.body
    const data = {
      id_project_eng,
      fee_bid,
      desc_nego_proj,
      sts_nego_proj: '1',
      createdAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
      updatedAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    }

    projectModel.addBidFeeProj(data)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
        err = { Msg: 'Failed input to database!' }
        response(res, 400, err)
      })
  },
  updateStsProjEng: (req, res) => {
    const idProjEng = req.body.id_project_eng
    const { sts_project_eng, date_accepted_eng } = req.body
    const data = {
      sts_project_eng,
      date_accepted_eng,
      updatedAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    }

    projectModel.updateStsProjEng(data, idProjEng)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        err = { Msg: 'Failed input to database!' }
        response(res, 400, err)
      })
  },
  getProjectByIdProj: async (req, res) => {
    const IdProj = req.params.idproj
    projectModel.getProjectByIdProj(IdProj)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        response(res, 400, err)
      })
  },
  getProjectEng: async (req, res) => {
    const IdProj = req.params.idproj
    projectModel.getProjectEng(IdProj)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        response(res, 400, err)
      })
  },
  getBidFeeProjByIdBid: async (req, res) => {
    const IdBid = req.params.idbid
    projectModel.getBidFeeProjByIdBid(IdBid)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        response(res, 400, err)
      })
  },
  updateStsBidProjComp: (req, res) => {
    const IdBid = req.body.id_bid
    const { sts_nego_proj } = req.body
    const data = {
      sts_nego_proj,
      updatedAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    }

    projectModel.updateStsBidProjComp(data, IdBid)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        err = { Msg: 'Failed input to database!' }
        response(res, 400, err)
      })
  },
  updateProgProjEng: (req, res) => {
    const idProjEng = req.body.id_project_eng
    const { progress } = req.body
    const data = {
      progress,
      updatedAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    }

    projectModel.updateStsProjEng(data, idProjEng)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        err = { Msg: 'Failed input to database!' }
        response(res, 400, err)
      })
  },
  updateProject: (req, res) => {
    const idProj = req.params.idproject
    const { project_name, description, period, deadline } = req.body
    const data = {
      project_name,
      description,
      period,
      deadline,
      updatedAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    }

    projectModel.updateProject(data, idProj)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        err = { Msg: 'Failed input to database!' }
        response(res, 400, err)
      })
  },
  deleteProject: (req, res) => {
    const idProj = req.params.idProj

    projectModel.deleteProject(idProj)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  getProjectEngByIdComp: (req, res) => {
    const idComp = req.params.idComp

    projectModel.getProjectEngByIdComp(idComp)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        if (err) {
          const result = {
            Msg: 'Get data error'
          }
          response(res, 400, result)
        }
      })
  },
  getProjectEngByIdProjEng: (req, res) => {
    const IdProjEng = req.params.idProjEng

    projectModel.getProjectEngByIdProjEng(IdProjEng)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        if (err) {
          const result = {
            Msg: 'Get data error'
          }
          response(res, 400, result)
        }
      })
  }

}
