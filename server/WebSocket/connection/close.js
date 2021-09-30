const { Logger } = require('../../../modules');


module.exports = {
    event: 'close',
    callback: (connection) => connection.close()
};
