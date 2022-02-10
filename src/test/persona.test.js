const FuncPersona = require('../functions/persona');

const events = {
    //pathParameters : {id : 1},
    //resource: 'personas/{id}',
    httpMethod : 'POST',
    body : JSON.stringify({
        nombre: 'Luke Skywalker',
        altura: '172',
        masa: '77',
        genero: 'male',
        anio_de_nacimiento: '19BBY',
        color_de_ojos: 'blue',
        color_de_piel: 'fair',
        color_de_pelo: 'blond',
        mundo_natal: 'https://swapi.py4e.com/api/planets/1/'
    })
};

const callback = (e, m) => {
    if (e) console.error(e);
    if (m) {
        console.log('************ Respuesta Servicio ******************')
        console.log(m);
        console.log('**************************************************')
    };
};

FuncPersona.handler(events, {}, callback);
