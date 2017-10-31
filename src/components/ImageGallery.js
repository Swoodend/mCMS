import React, { Component } from 'react';
import AvatarThumbnail from './AvatarThumbnail';
import '../styles/imagegallery.css';

export default class ImageGallery extends Component {
    
    constructor(props){
        super(props);
        this.setNewAvatar = this.setNewAvatar.bind(this);
    }

    setNewAvatar(fileName){
        console.log('this was called!', fileName);
    }

    render(){
        console.log('ImageGallery', this.props.avatars);
        let { avatars, email } = this.props;
        let srcPrefix = 'http://localhost:3001/public/uploads/' + email
        console.log(avatars, email);
        console.log(srcPrefix);

        if (avatars.length && email){
            avatars = avatars.map((fileName, i) => {
                return (
                    <AvatarThumbnail
                        key={i}
                        src={srcPrefix + '/' + fileName}
                        fileName={fileName}
                        setNewAv={this.setNewAvatar}
                    />
                )
            })
        } else {
            avatars = null;
        }

        return (
            <div className="image-gallery-content-container">
                <div className="image-gallery-subcontainer">
                     {avatars}
                </div>
            </div>
        )
    }
}