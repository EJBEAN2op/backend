const games = require('../../../components/Games');
const clients = require('../../../components/Clients');
const { Logger, guid } = require('../../../modules');
// eslint-disable-next-line no-unused-vars
const { encode } = require('msgpack-lite');
require('colors');


module.exports = {
    event: 'create',
    callback: (connection, message) => {
        const gameId = guid();
        const clientId = message.clientId;
        games[gameId] = {
            id: gameId,
            clients: []
        };
        const payLoad = {
            'method': 'create',
            'game': games[gameId]
        };
        clients[clientId].connection.send(JSON.stringify(payLoad));
        Logger.log('WS server', 'new game created', `gameId = ${gameId.cyan}`);
    }
};
