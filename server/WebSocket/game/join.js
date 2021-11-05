const games = require('../../../components/Games');
const Player = require('../../../components/Player');
const clients = require('../../../components/Clients');


module.exports = {
    event: 'join',
    method: 'join',
    callback: (connection, message) => {
        const clientId = message.clientId;
        const gameId = message.gameId;
        const nickname = message.nickname;
        const player = new Player(300, 500, clientId, nickname);
        const game = games.games[gameId];
        game.clients.push(player);
        // console.log(game.clients);
        // updateGameState();

        const payLoad = {
            'method': 'join',
            'game': game
        };
        // loop through all clients and tell them that people has joined
        game.clients.forEach(c => {
            clients.clients[c.id].connection.send(JSON.stringify(payLoad));
        });
    }
};


// function updateGameState() {
//     // {"gameid", fasdfsf}
//     for (const g of Object.keys(games)) {
//         const game = games.games[g];
//         const payLoad = {
//             'method': 'update',
//             'game': game
//         };

//         game.clients.forEach(c => {
//             clients[c.clientId].connection.send(JSON.stringify(payLoad));
//         });
//     }

//     setTimeout(updateGameState, 500);
// }
