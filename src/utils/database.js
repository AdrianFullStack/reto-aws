'use strict';

const AWS = require('aws-sdk');
const response = require('./response')

/*
AWS.config.update({
    region: "sa-east-1",
});
*/

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (params, callback) => {
    dynamoDb.put(params, (error) => {
        if (error) {
            console.log(error)
            return response.error(error, callback)
        }
        return response.success(params.Item, callback)
    });
}

module.exports.list = (params, callback) => {
    dynamoDb.scan(params, (error, result) => {
        if (error) {
            console.error(error);
            return response.error(error, callback)
        }
        return response.success(result.Items, callback)
    });
}
