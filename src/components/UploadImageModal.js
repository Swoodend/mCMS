import React, { Component } from 'react';
import ImageUploader from './ImageUploader';

export default class UploadImageModal extends Component {

    constructor(props){
        super(props);
        this.closeButtonClicked = this.closeButtonClicked.bind(this);
        this.updateAvatarSrc = this.updateAvatarSrc.bind(this);
    }

    closeButtonClicked(){
        this.props.closeModal();
    }

    updateAvatarSrc(currentUser, originalName){
        this.props.onAvatarUpload(currentUser, originalName);
    }

    render(){
        return (
            <div className="upload-image-modal">
                <div onClick={this.closeButtonClicked} className="close-button">x</div>
                <ImageUploader updateAvatarSrc={this.updateAvatarSrc}/>
            </div>
        )
    }
}