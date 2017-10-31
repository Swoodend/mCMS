import React, { Component } from 'react';

export default class AvatarThubmnail extends Component {
    constructor(props){
        super(props);
        this.setNewAvatar = this.setNewAvatar.bind(this);
    }

    setNewAvatar(){
        this.props.setNewAv(this.props.email, this.props.src);
    }

    render(){
        return (
            <img
            className="user-uploaded-avatar" 
            key={this.props.keyprop}
            src={this.props.src}
            onClick={this.setNewAvatar}
        />
        )
    }
}