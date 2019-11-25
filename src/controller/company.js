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
      uploader.upload(file,{folder: "hiringapp/company/logo"}
    ).then((result) => {
       
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
  deleteCompany: async (req, res) => {
    const companyId = req.params.companyId
    
    try {
      let getId = await companyModel.findCompanyById(companyId)
      const logo = getId[0].logo
      const filename = logo.split('/').pop().split('.')[0]
      const public_id = 'hiringapp/company/logo/'+filename
      uploader.destroy(public_id,(error, ress) => {
        console.log(ress); 
      })

      let delCompany = await companyModel.deleteCompany(companyId)
      response(res, 200, delCompany)
    } catch (error) {
      console.log(error);
    }
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
