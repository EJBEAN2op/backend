class Player {

    constructor(x = null, y = null, clientId = null) {
        this.id = clientId,
        this.x = x;
        this.y = y;
        this.velocity = {
            x: 0,
            y: 0
        },
        this.degree = 0,
        this.controls = {
            left: false,
            right: false,
            up: false,
            down: false
        };
    }

}

module.exports = Player;
