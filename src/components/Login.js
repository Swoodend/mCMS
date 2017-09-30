import React, { Component } from 'react';
import UserDataForm from './UserDataForm';
import '../styles/login.css';

export default class Login extends Component {

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

    return (
      <div className="main-container">
        <div className="form-container">
          <UserDataForm title="Login" inputData={inputs}/>
        </div>
      </div>
    )
  }
}
