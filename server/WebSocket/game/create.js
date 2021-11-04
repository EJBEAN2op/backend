const games = require('../../../components/Games');
const clients = require('../../../components/Clients');
const guid = require('../../../modules/guid');
const Logger = require('../../../modules/Logger');

// eslint-disable-next-line no-unused-vars
const { encode } = require('msgpack-lite');
const Player = require('../../../components/Player');
require('colors');


module.exports = {
    event: 'create',
    callback: (connection, message) => {
        const gameId = guid();
        const clientId = message.clientId;

        const player = new Player(300, 500, clientId);
        games.games[gameId] = {
            id: gameId,
            clients: [player]
        };
        const payLoad = {
            'method': 'create',
            'game': games.games[gameId]
        };
        clients.clients[clientId].connection.send(JSON.stringify(payLoad));
        Logger.log('WS server', 'new game created', `gameId = ${gameId.cyan}`);
    }
};
