require('dotenv/config')

const skillModel = require('../model/skill')
const { response } = require('../helpers/helpers')

module.exports = {
  addSkill: (req, res) => {
    const { name_skill } = req.body
    const data = {
      name_skill
    }
    skillModel.addSkill(data)
      .then(result => {
        result = {
          Msg: 'Submit data successfully!'
        }
        response(res, 200, result)
      })
      .catch(err => {
        err = {
          Msg: 'Submit data failed!'
        }
        response(res, 400, err)
      })
  },
  getSkill: (req, res) => {
    skillModel.getSkill()
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  updateSkill: (req, res) => {
    const skillId = req.params.skillId
    const { name_skill } = req.body
    const data = {
      name_skill
    }
    skillModel.updateSkill(data, skillId)
      .then(result => {
        result = {
          Msg: 'Update data successfully!'
        }
        response(res, 200, result)
      })
      .catch(err => {
        err = {
          Msg: 'Update data failed!'
        }
        response(res, 400, err)
      })
  },
  deleteSkill: (req, res) => {
    const skillId = req.params.skillId

    skillModel.deleteSkill(skillId)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        response(res, 400, err)
      })
  },
  findSkill: (req, res) => {
    const skillId = req.params.skillId

    skillModel.findSkill(skillId)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  }

}
