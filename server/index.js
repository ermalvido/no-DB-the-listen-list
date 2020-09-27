const express = require('express');
const artists = require('./artists');
const artistsCtrl = require('./controllers/artistsCtrl');
const favsCtrl = require('./controllers/favsCtrl');
//When using controllers, they need to be required to the main server file so that you can 
//access their handler functions.

const app = express();

app.use(express.json());

//artistsCtrl endpoints
app.get('/api/artists', artistsCtrl.getArtists);

//FavArtistCtrl endpoints
app.get('/api/favorites-artists', favsCtrl.getFav);
app.post('/api/favorites-artists', favsCtrl.addFav);
app.put('/api/favorites-artists/:id', favsCtrl.updateFav);
app.delete('/api/favorites-artists/:id', favsCtrl.deleteFav);

app.listen(4421, () => console.log('Server is running on 4421'));