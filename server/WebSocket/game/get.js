// eslint-disable-next-line no-unused-vars
const { encode } = require('msgpack-lite');
const games = require('../../../components/Games');
require('colors');

module.exports = {
    event: 'get',
    callback: (connection, message) => {
        const gameId = message.gameId;
        const found = games.games[gameId];
        const payLoad = {
            method: 'get',
            game: found
        };

        connection.send(JSON.stringify(payLoad));
        // Logger.log('WS server', 'client connected', `clientId = ${clientId.cyan}`);
    }
};
