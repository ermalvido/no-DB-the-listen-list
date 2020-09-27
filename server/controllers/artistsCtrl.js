const artistsArray = require('../artists');

module.exports = {
    getArtists: (req, res) => {
        res.status(200).send(artistsArray)
    }
}