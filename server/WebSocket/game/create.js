const games = require('../../../components/Games');
const clients = require('../../../components/Clients');
const guid = require('../../../modules/guid');
const Logger = require('../../../modules/Logger');

// eslint-disable-next-line no-unused-vars
const { encode } = require('msgpack-lite');
require('colors');


module.exports = {
    event: 'create',
    callback: (connection, message) => {
        const gameId = guid();
        const clientId = message.clientId;

        games.games[gameId] = {
            id: gameId,
            clients: []
        };
        const payLoad = {
            'method': 'create',
            'game': games.games[gameId]
        };
        clients.clients[clientId].connection.send(JSON.stringify(payLoad));
        Logger.log('WS server', 'new game created', `gameId = ${gameId.cyan}`);
    }
};
