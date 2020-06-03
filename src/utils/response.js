module.exports.createSuccessResponse = (body, statusCode) => ({
    statusCode: statusCode,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'false',
        'Access-Control-Allow-Methods': 'POST,PUT,OPTIONS,GET',
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent'
    },
    body: JSON.stringify(body)
});

module.exports.createErrorResponse = (statusCode, message) => ({
    statusCode: statusCode || 501,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'false',
        'Access-Control-Allow-Methods': 'POST,PUT,OPTIONS,GET',
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent'
    },
    body: JSON.stringify(message)
});

module.exports.error = (error, callback) => {
    console.error("lambda error: " + error.stack);
    return callback(null, this.createErrorResponse(error.status, error.summary));
};

module.exports.success = (data, callback, statusCode = 200) => {
    console.log('lambda success: ', data);
    return callback(null, this.createSuccessResponse(data, statusCode));
};
