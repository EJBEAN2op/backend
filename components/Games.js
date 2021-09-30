class Games {

    constructor() {
        this.games = {};
    }

    roomsCount() {
        return Object.keys(this.games).length;
    }

}

module.exports = new Games();
