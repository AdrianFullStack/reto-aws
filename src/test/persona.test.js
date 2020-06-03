//require('../util/TestConfigurador').cargarVariablesEntorno();
const FuncPersona = require('../functions/persona');

const events = {
    httpMethod: 'POST',
    body: JSON.stringify({
        name: 'rogelio',
        last_name: 'suclupe'
    }),
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
