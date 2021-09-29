const { Logger } = require('../../../modules');


module.exports = {
    event: 'close',
    callback: () => Logger.log('WS server', 'connection closed')
};
