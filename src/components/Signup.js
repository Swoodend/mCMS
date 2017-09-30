import React, { Component } from 'react';
import UserDataForm from './UserDataForm';

export default class Signup extends Component {

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
      <div className="green-hex-background">
        <div className="form-container">
          <UserDataForm title="Signup" inputData={inputs}/>
        </div>
      </div>
    );
  }
}
