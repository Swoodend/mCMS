import React, { Component } from 'react';
import UserDataForm from './UserDataForm';

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
      <UserDataForm inputData={inputs}/>
    )
  }
}
