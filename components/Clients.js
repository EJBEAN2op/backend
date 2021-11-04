class Clients {

    constructor() {
        this.clients = {};
    }

    clientsCount() {
        return Object.keys(this.clients).length;
    }

}
const client = new Clients();
module.exports = client;
