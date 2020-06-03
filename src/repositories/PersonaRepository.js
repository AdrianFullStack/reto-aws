'use strict';

const param = require('../utils/set_parameters');
const database = require('../utils/database');
const externalApi = require('../services/ExternalApi')
const response = require('../utils/response')

const params = {
    TableName: 'personas',
};

class PersonaRepository {
    static clone(id, callback) {
        externalApi.call(id).then((data) => {
            if (!data.status.success) {
                return response.error(data.status.error, callback)
            }
            params.Item = param.setParameters(data.payload)
            return database.create(params, callback)
        }).catch(error => {
            return response.error(error, callback)
        })
    }

    static create(body, callback) {
        params.Item = param.setParameters(body)
        return database.create(params, callback)
    }

    static list(callback) {
        return database.list(params, callback)
    }
}

module.exports = PersonaRepository
