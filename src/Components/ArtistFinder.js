import React, { Component } from 'react';
import axios from 'axios';
import Artists from './Artists';

class ArtistFinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: []
        }
    }

    componentDidMount() {
        this.getArtists();
    }
    getArtists = () => {
        axios.get('/api/artists')
        .then(res => {
            this.setState({artist: res.data})
        })
        .catch(err => console.log(err))
    }

    render() {
        const mappedArtist = this.state.artist.map((artist, i) => (
            <Artists
                key={i}
                artist={artist}
                addFn={this.props.addFn}
                refreshFn={this.getArtists}/>
        ))
        return (
            <div className='artists-flex'>
                {mappedArtist}
            </div>
        )
    }
}

export default ArtistFinder;