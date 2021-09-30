const fs = require('fs');
// eslint-disable-next-line no-unused-vars
const { decode, encode } = require('msgpack-lite');
const gameProtocols = fs.readdirSync('./server/WebSocket/game');

module.exports = {
    event: 'message',
    callback: (connection, message) => {
        const result = decode(message);
        if (!result.method) throw new Error('WS message must have a result method');
        const method = gameProtocols.find(x => x.toLowerCase() == `${result.method}.js`.toLowerCase());
        if (!method) throw new Error(`game protocol ${result.method} does not exist`);
        const protocol = require(`../game/${method}`);
        protocol.callback(connection, result);
    }
};
