'use strict';

const uuid = require('uuid');

module.exports.setParameters = (params) => {
    const timestamp = new Date().getTime();
    params.id = uuid.v1()
    params.createdAt = timestamp
    params.updatedAt = timestamp
    return params
}
