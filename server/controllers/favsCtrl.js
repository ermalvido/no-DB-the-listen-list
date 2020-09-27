const favorites = [];
let id = 1;

module.exports = {
    getFav: (req, res) => {
        res.status(200).send(favorites);
    },
    addFav: (req, res) => {
        const {artist} = req.body;

        artist.id = id;
        id++;

        favorites.push(artist);
        res.status(200).send(favorites);
    },
    updateFav: (req, res) => {
        const {id} = req.params;
        const {name} = req.body;

        const artist = favorites.find(element => element.id === +id);
        artist.name = name;
        res.status(200).send(favorites);
    },
    deleteFav: (req, res) => {
        const {id} = req.params;

        const index = favorites.findIndex(element => element.id === +id);
        favorites.findIndex.splice(index, 1);
        res.status(200).send(favorites);
    }
}