import React, { Component } from 'react';
import '../styles/imageuploader.css';

export default class ImageUploader extends Component {
    
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendImageDataBack = this.sendImageDataBack.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log("submit registered");
        let user = localStorage.getItem('currentUser');
        let form = new FormData(e.target);
        form.append('token', user);

        let requestConfig = {
            method: "POST",
            body: form
          };

        fetch('/api/upload', requestConfig)
        .then((res) => {
            return res.json();
        }).then((res) => {
            if (res.status === "OK"){
                this.sendImageDataBack(res);
            }
        });
    }

    sendImageDataBack(responseObj){
        this.props.updateAvatarSrc(responseObj);
    }


    render() {
        return (
            <div className="image-uploader-container">
                <form onSubmit={this.handleSubmit}id="image-upload-form" method="POST" encType="multipart/form-data" action="/api/upload">
                    <input type="file" name="avatar"/>
                    <input type="submit" value="Upload"/>
                </form>
            </div>
        )
    }
}