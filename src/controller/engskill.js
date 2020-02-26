require('dotenv/config')

const engskillModel = require('../model/engskill')
const { response } = require('../helpers/helpers')

module.exports = {
  addEngSkill: (req, res) => {
    const { id_eng, id_skill } = req.body
    const data = {
      id_eng,
      id_skill
    }
    engskillModel.addEngSkill(data)
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
  getEngSkill: (req, res) => {
    engskillModel.getEngSkill()
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  updateEngSkill: (req, res) => {
    const skillId = req.params.id
    const { id_skill, level } = req.body
    const data = {
      id_skill,
      level
    }
    engskillModel.updateEngSkill(data, skillId)
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
  deleteEngSkill: (req, res) => {
    const skillId = req.params.id

    engskillModel.deleteEngSkill(skillId)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        response(res, 400, err)
      })
  }
}
