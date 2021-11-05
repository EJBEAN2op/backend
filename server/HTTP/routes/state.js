const games = require('../../../components/Games');

module.exports = {
    route: '/state',
    callback: (req, res) => {
        const gameid = req.query.gameid;
        const game = games.games[gameid];
        res.send(game);
    }
};
