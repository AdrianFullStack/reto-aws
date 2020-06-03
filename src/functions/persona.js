'use strict'

const repo = require('../repositories/PersonaRepository')

module.exports.handler = (event, context, callback) => {
    switch (event.httpMethod) {
        case 'POST':
            return repo.create(event.body, callback)
        default:
            return repo.list(callback)
    }
}
