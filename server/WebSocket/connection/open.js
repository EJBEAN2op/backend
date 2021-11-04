/* eslint-disable no-unused-vars */
const clients = require('../../../components/Clients');
const { Logger, guid } = require('../../../modules');
const { encode } = require('msgpack-lite');

module.exports = {
    event: 'open',
    callback: (connection) => {

    }
};
