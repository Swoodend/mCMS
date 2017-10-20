import React, { Component } from 'react';

export default class UploadImageModal extends Component {

    constructor(props){
        super(props);
        this.closeButtonClicked = this.closeButtonClicked.bind(this);
    }

    closeButtonClicked(){
        this.props.closeModal();
    }

    render(){
        return (
            <div className="upload-image-modal">
                <div onClick={this.closeButtonClicked} className="close-button">x</div>
            </div>
        )
    }
}