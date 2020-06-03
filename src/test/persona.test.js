//require('../util/TestConfigurador').cargarVariablesEntorno();
const FuncPersona = require('../functions/persona');

const events = {
    pathParameters : {operacion : 'consultanotificacion'},
    resource: 'personas/{id}',
    httpMethod : 'GET',
    body : JSON.stringify({
    })
};

const callback = (e, m) => {
    if (e) console.error(e);
    if (m) {
        console.log('************ Respuesta Servicio *****************')
        console.log(m);
        console.log('*************************************************')
    };
};

FuncPersona.handler(events, {}, callback);
