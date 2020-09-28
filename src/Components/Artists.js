import React, { Component } from 'react';

class Artists extends Component {
    handleAdd = () => {
        const {artist} = this.props;
        let newFav = {
            id: artist.id,
            name: artist.name,
            img: artist.img
        }

        this.props.addFn(newFav);
        this.props.refreshFn();
    }
    render() {
        return (
            <div onClick={this.handleAdd}>
                <img src={this.props.artist.img} alt={this.props.artist.name}/>
                <p>{this.props.artist.name}</p>
            </div>
        )
    }
}

export default Artists;