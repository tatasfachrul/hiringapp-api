const uuid = require('uuid/v4')
const _ = require('lodash')

module.exports = {
  response: (res, status, data, pagination) => {
    const result = {}

    result.uuid = uuid()
    result.status = status || 200
    result.result = data

    if (_.isEmpty(pagination)) {
      return res.status(result.status).json(result)
    } else {
      result.page = pagination.page + 1
      result.limit = pagination.limit
      result.total_data = pagination.count
      result.total_page = pagination.totalPage
    }

    return res.status(result.status).json(result)
  }
}
