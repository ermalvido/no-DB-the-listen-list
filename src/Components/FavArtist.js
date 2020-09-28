import React, { Component } from 'react';

class FavArtist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            nameInput: ''
        }
    }
    handleInput = (val) => {
        this.setState({nameInput: val})
    }
    handleToggle = () => {
        this.setState({isEditing: !this.state.isEditing})
    }
    handleEdit = (id) => {
        this.props.nameFn(id, this.state.nameInput);
        this.handleToggle();
    }

    render() {
        return (
            <div>
                <img src={this.props.artist.img} alt={this.props.artist.name}/>
                {this.state.isEditing
                ? (
                    <div>
                        <input
                            value={this.state.nameInput}
                            onChange={e => this.handleInput(e.target.value)}/>
                        <button onClick={() => this.handleEdit(this.props.artist.id)}>Submit</button>
                    </div>
                )
                : (
                    <div>
                        <p>{this.props.artist.name}</p>
                        <button onClick={this.handleToggle}>Edit Name</button>
                    </div>
                )}
                <button onClick={() => this.props.deleteFav(this.props.artist.id)}>Remove</button>
            </div>
        )
    }
}

export default FavArtist;