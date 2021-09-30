const clients = require('../../../components/Clients');
const { Logger } = require('../../../modules');
// eslint-disable-next-line no-unused-vars
const { encode } = require('msgpack-lite');

module.exports = {
    event: 'disconnect',
    callback: (connection, message) => {
        const clientId = message.clientId;
        delete clients[clientId];
        Logger.log('clients manager', `disconnected client ${clientId}`);
    }
};
