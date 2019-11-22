require('dotenv/config')

const showcaseModel = require('../model/showcase')
const { response } = require('../helpers/helpers')

module.exports = {
  addShowcase: (req, res) => {
    const { id_eng, url, description } = req.body
    const data =  {
      id_eng,
      url,
      description
    }
    showcaseModel.addSkill(data)
      .then(result => {
        result = {
          Msg: "Submit data successfully!"
        }
        response(res, 200, result)
      })
      .catch(err => {
        err = {
          Msg: "Submit data failed!"
        }
        response(res, 400, err)
      })
  },
  getShowcase: (req, res) => {
    showcaseModel.getShowcase()
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        err = {
          Msg: "Data not found!"
        }
        response(res, 400, err)
      })
  },
  updateShowcase: (req, res) => {
    const showcaseId = req.params.showcaseId
    const { url, description } = req.body
    const data= {
      url,
      description
    }
    showcaseModel.updateShowcase(data, showcaseId)
      .then(result => {
        result = {
          Msg: "Update data successfully!"
        }
        response(res, 200, result)
      })
      .catch(err => {
        err = {
          Msg: "Update data failed!"
        }
        response(res, 400, err)
      })
  },
  deleteShowcase: (req,res) => {
    const showcaseId = req.params.showcaseId
    
    showcaseModel.deleteShowcase(showcaseId)
    .then(result => {
      result = {
        Msg: "Delete data successfully!"
      }
      response(res, 200, result)
    })
    .catch(err => {
      err = {
        Msg: "Delete data failed!"
      }
      response(res, 400, err)
    })
  }
}