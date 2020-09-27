import React, { Component } from 'react';
import Header from './Components/Header';
import ArtistFinder from './Components/ArtistFinder';
import FavList from './Components/FavList';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    }
    this.addFav = this.addFav.bind(this);
  }

  componentDidMount() {
    axios.get('/api/favorites-artists')
    .then(res => {
      this.setState({favorites: res.data})
    })
    .catch(err => console.log(err));
  }

  addFav(artist) {
    axios.post('/api/favorites-artists', {artist: artist})
    .then(res => {
      this.setState({favorites: res.data})
    })
    .catch(err => console.log(err));
  }

  updateFav = (id, newName) => {
    let body = {name: newName};

    axios.put(`/api/favorites-artists/${id}`, body)
    .then(res => {
      this.setState({favorites: res.data})
    })
    .catch(err => console.log(err));
  }

  deleteFav = (id) => {
    axios.delete(`/api/favorites-artists/${id}`)
    .then(res => {
      this.setState({favorites: res.data})
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ArtistFinder 
          addFn={this.addFav}/>
        <FavList 
          favorites={this.state.favorites}
          nameFn={this.updateFav}
          deleteFn={this.deleteFav}/>
      </div>
    )
  }
}

export default App;