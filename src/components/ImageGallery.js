import React, { Component } from 'react';
import '../styles/imagegallery.css';

export default class ImageGallery extends Component {
    render(){
        let divStyle = {"background":"red", "height": "100px", "width": "100px", "outline":"1px solid black"}
        return (
            <div className="image-gallery-content-container">
                <div className="image-gallery-subcontainer">
                    <div style={divStyle}></div>
                    <div style={divStyle}></div>
                    <div style={divStyle}></div>
                    <div style={divStyle}></div>
                    <div style={divStyle}></div>
                    <div style={divStyle}></div>
                    <div style={divStyle}></div>
                    <div style={divStyle}></div>
                    <div style={divStyle}></div>
                    <div style={divStyle}></div>
                    <div style={divStyle}></div>
                    <div style={divStyle}></div>
                    <div style={divStyle}></div>
                    <div style={divStyle}></div>
                    <div style={divStyle}></div>                    
                </div>
            </div>
        )
    }
}