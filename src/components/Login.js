import React, { Component } from 'react';
import UserDataForm from './UserDataForm';
import { Redirect } from 'react-router-dom';

import '../styles/login.css';

export default class Login extends Component {

  constructor(props){
    super(props);
    this.redirectAfterLogin = this.redirectAfterLogin.bind(this);
    
    this.state = {
      redirectToDash : false
    }
  }

  redirectAfterLogin(){
    this.setState({
      redirectToDash: true
    });
  }

  render(){
    let inputs = [
      {
        type: "email",
        placeholder: "Email"
      },
      {
        type: "password",
        placeholder: "Password"
      }
    ];

    let redirectAfterLogin = this.state.redirectToDash ? <Redirect to="/dashboard"/> : null;

    return (
      <div className="green-hex-background">
        {redirectAfterLogin}
        <div className="form-container">
          <UserDataForm title="Login" inputData={inputs} redirectUser={this.redirectAfterLogin}/>
        </div>
      </div>
    )
  }
}
