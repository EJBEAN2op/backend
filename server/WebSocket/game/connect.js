const clients = require('../../../components/Clients');
const { Logger, guid } = require('../../../modules');
// eslint-disable-next-line no-unused-vars
const { encode } = require('msgpack-lite');

module.exports = {
    event: 'connect',
    callback: (connection) => {
        const clientId = guid();
        clients[clientId] = { connection: connection };
        const payLoad = {
            'method': 'connect',
            'clientId': clientId.toString()
        };
        connection.send(JSON.stringify(payLoad));
        Logger.log('WS server', 'client connected', `sent payload ${payLoad}`, `clientId = ${clientId}`);
    }
};
