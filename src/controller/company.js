require('dotenv/config')

const _ = require('lodash')
const companyModel = require('../model/company')
const { response } = require('../helpers/helpers')
const { uploader } = require('../config/cloudinary')
const { dataUri } = require('../helpers/multer')
const jwtDecode = require('jwt-decode')

module.exports = {
  getCompany: (req, res) => {
    companyModel
      .getCompany()
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  addCompany: (req, res) => {
    const token = req.headers['x-access-token']
    const decoded = jwtDecode(token)
    const idUser = decoded.id_user

    const { name, location, description } = req.body
    const data = {
      name,
      logo: null,
      location,
      description,
      id_user: idUser
    }

    companyModel
      .addCompany(data)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        response(res, 200, err)
      })

    // if (req.file) {
    //   const file = dataUri(req).content;
    //   uploader.upload(file,{folder: "hiringapp/company/logo"}
    // ).then((result) => {

    //   })
    //   .catch((err) => res.status(400).json({
    //     messge: 'someting went wrong while processing your request',
    //     data: {
    //       err
    //     }
    //   }))
    // }
  },

  updateCompany: (req, res) => {
    const companyId = req.params.companyId
    const { name, location, description } = req.body
    const data = {
      name,
      location,
      description
    }
    companyModel
      .updateCompany(data, companyId)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  deleteCompany: async (req, res) => {
    const companyId = req.params.companyId

    try {
      const getId = await companyModel.findCompanyById(companyId)
      const logo = getId[0].logo
      const filename = logo
        .split('/')
        .pop()
        .split('.')[0]
      const publicId = 'hiringapp/company/logo/' + filename
      uploader.destroy(publicId, (error, ress) => {
        if (error) console.log(error)
        console.log(ress)
      })

      const delCompany = await companyModel.deleteCompany(companyId)
      response(res, 200, delCompany)
    } catch (error) {
      console.log(error)
    }
  },
  findCompanyById: (req, res) => {
    const companyId = req.params.idCompany

    companyModel
      .findCompanyById(companyId)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  findCompanyByUserName: (req, res) => {
    const userName = req.params.username

    companyModel
      .findCompanyByUserName(userName)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  logoCompany: (req, res) => {
    try {
      const companyId = req.params.companyId
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
        logo: dataFile.url
      }
      console.log(data)
      companyModel.logoCompany(data, companyId)
        .then(result => response(res, 200, result))
        .catch(error => response(res, 200, error))
    } catch (error) {
      response(res, 400, error)
    }
  }
}
