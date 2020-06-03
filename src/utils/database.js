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
            response.error(error, callback)
            /*return callback(null, {
                statusCode: error.statusCode || 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Error no se pudo crear el registro.',
            });*/
        }

        response.success(params.Item)

        /*const response = {
            statusCode: 201,
            body: JSON.stringify(params.Item),
        };
        return callback(null, response);*/
    });
}

module.exports.list = (params, callback) => {
    dynamoDb.scan(params, (error, result) => {
        if (error) {
            console.error(error);
            response.error(error, callback)

            /*return callback(null, {
                statusCode: error.statusCode || 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'No se pudo obtener todo los registros.',
            });*/
        }

        response.success(params.Items)

        /*const response = {
            statusCode: 200,
            body: JSON.stringify(result.Items),
        };
        return callback(null, response);*/
    });
}
