import React, { Component } from 'react';
import ImageGallery from './ImageGallery';
import '../styles/imageuploader.css';

export default class ImageUploader extends Component {
    
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendImageDataBack = this.sendImageDataBack.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selectedFile: null
        }
        
    }

    handleSubmit(e){
        e.preventDefault();
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

    handleChange(e){
        let path = e.target.value;
        let fileName = path.substring(path.lastIndexOf('\\') + 1);
        this.setState({
            selectedFile: fileName
        })
    }

    sendImageDataBack(responseObj){
        this.props.updateAvatarSrc(responseObj);
    }

    render() {
        return (
            <div className="image-uploader-container">
                <div className="uploader-form-container">
                    <div className="image-uploader-header">
                        <h3>Upload new avatar:</h3>
                    </div>
                    <div className="form-content-container">
                        <form className="uploader-form" onSubmit={this.handleSubmit}id="image-upload-form" method="POST" encType="multipart/form-data" action="/api/upload">
                            <p style={{"width":"100%"}}>{this.state.selectedFile}</p>                                                
                            <div style={{"marginRight":"5px"}} className="upload-btn-container">
                                Choose a file
                                <input className="upload-input" type="file" name="avatar" onChange={this.handleChange}/>
                            </div>
                            <div style={{"marginLeft":"5px"}}className="upload-btn-container">
                                Upload
                                <input className="upload-input" type="submit"/>
                            </div>                            
                        </form>
                    </div>
                </div>
                <div className="image-gallery-container">
                    <div className="image-uploader-header">
                        <h3>Choose old avatar:</h3>
                        <ImageGallery/>
                    </div>

                </div>
            </div>
        )
    }
}