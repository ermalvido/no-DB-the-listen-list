import React from 'react';
import FavArtist from './FavArtist';

const FavList = props => {
    const mappedArtist = props.favorites.map((artist, i) => (
        <FavArtist
            key={i}
            artist={artist}
            nameFn={props.nameFn}
            deleteFav={props.deleteFav}/>
    ))

    return (
        <div>
            <h1>Top 3</h1>
            <div className='favorites-flex'>
                {mappedArtist}
            </div>
        </div>
    )
}

export default FavList;