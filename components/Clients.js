class Clients {

    constructor() {
        this.clients = {};
    }

    clientsCount() {
        return Object.keys(this.clients).length;
    }

}

module.exports = new Clients();
