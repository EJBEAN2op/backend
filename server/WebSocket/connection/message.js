/* eslint-disable no-unused-vars */
const { decode, encode } = require('msgpack-lite');

module.exports = {
    event: 'message',
    callback: (message) => {
        const result = decode(message);
        console.log(result);
    }
};
