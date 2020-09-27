import React from 'react';
import FavArtist from './FavArtist';

const FavList = props => {
    const mappedArtist = props.favorites.map((artist, i) => (
        <FavArtist
            key={i}
            artist={artist}
            nameFn={props.nameFn}
            deleteFn={props.deleteFn}/>
    ))

    return (
        <div>
            <h1>Top 3</h1>
            <div className='artist-flex'>
                {mappedArtist}
            </div>
        </div>
    )
}

export default FavList;