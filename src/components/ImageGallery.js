import React, { Component } from 'react';
import AvatarThumbnail from './AvatarThumbnail';
import '../styles/imagegallery.css';

export default class ImageGallery extends Component {
    
    constructor(props){
        super(props);
        this.setNewAvatar = this.setNewAvatar.bind(this);
    }

    setNewAvatar(email, filePath){
        let requestConfig = {
            method: "POST", 
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify({
                email: email,
                path: filePath
            })
        };
        console.log('this was called!', email, filePath);
        fetch('/api/set-avatar', requestConfig)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                if (res.status === "OK"){
                    window.location.href = 'http://localhost:3000/dashboard';
                }
            })
    }

    render(){
        console.log('ImageGallery', this.props.avatars);
        let avatars = this.props.avatars || [];
        let { email } = this.props;
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
                        email={this.props.email}
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