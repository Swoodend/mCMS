import React, { Component } from 'react';
import '../styles/imageuploader.css';

export default class ImageUploader extends Component {
    render() {
        return (
            <div className="image-uploader-container">
                <form id="image-upload-form" method="POST" encType="multipart/form-data" action="/api/upload">
                    <input type="file" name="avatar"/>
                    <input type="submit" value="Upload"/>
                </form>
            </div>
        )
    }
}