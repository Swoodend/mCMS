import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default class Navbar extends Component {
  constructor(props){
    super(props);

    this.state = {
      loggedIn : false
    };
  }

  componentDidMount(){
    let loggedIn = this.props.checkLoginState();
    if (loggedIn){
      this.setState({
        loggedIn : true
      });
    }
  }

  render(){

    return (
      <div className="nav">

        <div className="left-side-nav">
          <Link to="/">
            <div className="nav-logo-area">
              <img alt="mcms logo" src="https://res.cloudinary.com/ddbeeuyr4/image/upload/v1506393087/mcms-logo_zozjob.png"/>
            </div>
          </Link>
        </div>

        {!this.state.loggedIn &&
          <div className="right-side-nav">
            <Link to="/login">
              <div className="push-left nav-btn">
                Login
              </div>
            </Link>
            <Link to="/signup">
              <div className="nav-btn">
                Sign up
              </div>
            </Link>
          </div>
        }
      </div>
    );
  }
}
