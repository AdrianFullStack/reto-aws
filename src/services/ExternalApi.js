'use strict'
const axios = require('axios')
const attr_person = require('../utils/cast_attr_person')

class ExternalApi {
    static async call(id) {
        let response = {
            payload: {},
            status: {
                success: true
            }
        };

        try {
            let data = {};
            let _response = await axios.get(`https://swapi.py4e.com/api/people/${id}`);
            Object.entries(_response.data).forEach(([key, value]) => {
                if (attr_person[key] != undefined) {
                    data[attr_person[key]] = value
                }
            })
            response.payload = data;
        } catch (e) {
            console.log('* ExternalApi *');
            response.status.success = false;
            if(e) {
                response.status.error = e;
            }
        }

        return response;
    }
}

module.exports = ExternalApi;
