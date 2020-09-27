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
                <img src={this.props.FavArtist.img} alt={this.props.FavArtist.name}/>
                {this.state.isEditing
                ? (
                    <div>
                        <input
                            value={this.state.nameInput}
                            onChange={e => this.handleInput(e.target.value)}/>
                        <button onClick={() => this.handleEdit(this.props.FavArtist.id)}>Submit</button>
                    </div>
                )
                : (
                    <div>
                        <p>{this.props.FavArtist.name}</p>
                        <button onClick={this.handleToggle}>Edit Name</button>
                    </div>
                )}
                <button onClick={() => this.props.deleteFn(this.props.FavArtist.id)}>Delete</button>
            </div>
        )
    }
}

export default FavArtist;