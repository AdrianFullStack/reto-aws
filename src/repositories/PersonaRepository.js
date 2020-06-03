'use strict';

const param = require('../utils/set_parameters');
const database = require('../utils/database');
const externalApi = require('../services/ExternalApi')
const response = require('../utils/response')

const params = {
    TableName: 'personas',
};

class PersonaRepository {
    static create(body, callback) {
        externalApi.call().then((data) => {
            if (data.status.success) {
                params.Item = param.setParameters(data.payload)
                return database.create(params, callback)
            }
            else{
                return callback(null, {
                    statusCode: 501,
                    headers: { 'Content-Type': 'text/plain' },
                    body: data.status.error.messages,
                });
            }
        }).catch(error => {
            response.error(error, callback)
        })
    }

    static list(callback) {
        return database.list(params, callback)
    }
}

module.exports = PersonaRepository
