import React, { Component } from 'react';
import '../styles/home.css';


export default class Home extends Component {

  render(){
    return (
      <div className="main-container">
        <img alt="books on a shelf" id="main-image" src="http://res.cloudinary.com/ddbeeuyr4/image/upload/dn_176,e_blur:805,o_71/v1506459774/office-2616310_1920_o1lmpb.jpg"/>
        <div className="info-box">
          <h1><span className="home-pink">m</span><span className="home-green">CMS</span></h1>
          <h3>a mini content management system</h3>
        </div>
      </div>
    );
  }
}
