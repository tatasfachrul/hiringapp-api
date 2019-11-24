require('dotenv/config')

const companyModel = require('../model/company')
const { response } = require('../helpers/helpers')
const { uploader } = require('../config/cloudinary');
const { dataUri } = require('../helpers/multer');

module.exports = {
  getCompany: (req, res) => {
    companyModel.getCompany()
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  addCompany: (req, res) => {

    if (req.file) {
      const file = dataUri(req).content;
      uploader.upload(file).then((result) => {
       
        const { name, location, description } = req.body
        const data = {
          name,
          logo: result.url,
          location,
          description
        }

        companyModel.addCompany(data)
          .then(result => {
            response(res, 200, result)
            console.log(result.insertId) //get id AI
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
    }
  },

  updateCompany: (req, res) => {
    const companyId = req.params.companyId
    const { name, logo, location, description } = req.body
    const data = {
      name,
      logo,
      location,
      description
    }
    companyModel.updateCompany(data, companyId)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  deleteCompany: (req, res) => {
    const companyId = req.params.companyId

    companyModel.deleteCompany(companyId)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  findCompanyById: (req, res) => {
    const companyId = req.params.idCompany

    companyModel.findCompanyById(companyId)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },

}
