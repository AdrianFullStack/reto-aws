'use strict'

const repo = require('../repositories/PersonaRepository')


/*
module.exports.handler = (event, context, callback) => {
    switch (event.httpMethod) {
        case 'POST':
            const data = JSON.parse(event.body)
            return repo.create(data, callback)
        default:
            if (event.pathParameters) {
                return repo.clone(event.pathParameters.id, callback)
            }
            return repo.list(callback)
    }
}
*/
module.exports.post = (event, context, callback) => {
    const data = JSON.parse(event.body)
    return repo.create(data, callback)
}

module.exports.get = (event, context, callback) => {
    if (event.pathParameters) {
        return repo.clone(event.pathParameters.id, callback)
    }
    return repo.list(callback)
}
