/* eslint-disable no-unused-vars */
const clients = require('../../../components/Clients');
const { Logger, guid } = require('../../../modules');
const { encode } = require('msgpack-lite');

module.exports = {
    event: 'open',
    callback: (connection) => {
        // const clientId = guid();
        // clients[clientId] = { connection: connection };
        // const payLoad = {
        //     method: 'connect',
        //     clientId: clientId
        // };
        // connection.send(encode(payLoad));
        Logger.log('WS server', 'opne');
    }
};
