const fs = require('fs');
const routeFolder = fs.readdirSync('./server/WebSocket/connection');
const { Logger } = require('../../modules');

class WsManager {

    constructor(server, opts) {
        this.server = server;
        this.options = opts;
    }

    handle() {
        Logger.log('WS Manager', 'handling rquests');
        this.server.on('connection', connection => {
            Logger.log('WS server', 'new connection');
            for (const routes of routeFolder) {
                const routeMeta = require(`./connection/${routes}`);
                const { callback, event } = routeMeta;
                connection.on(event, (message) => {
                    Logger.log('WS server', `connection event => ${event}`, 'executing callback');
                    callback(message);
                });
            }
        });
    }

}


module.exports = WsManager;
