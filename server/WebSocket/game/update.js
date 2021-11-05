// eslint-disable-next-line no-unused-vars
const { encode } = require('msgpack-lite');
const games = require('../../../components/Games');
require('colors');

module.exports = {
    event: 'update',
    callback: (connection, message) => {
        const player = message.player;
        const clientId = player.id;
        const gameId = message.gameId;
        const found = games.games[gameId].clients.find(x => x.id == clientId);
        const idx = games.games[gameId].clients.indexOf(found);
        games.games[gameId].clients.splice(idx, 1, player);
        // console.log(games.games[gameId].clients.find(x => x.id == clientId).x);
        // connection.send(JSON.stringify(payLoad));
        // Logger.log('WS server', 'client connected', `clientId = ${clientId.cyan}`);
    }
};
