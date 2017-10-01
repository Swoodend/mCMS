import React, { Component } from 'react';
import UserDataForm from './UserDataForm';
import { Redirect } from 'react-router-dom';

export default class Signup extends Component {

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
    let redirectAfterSignup = this.state.redirectToDash ? <Redirect to="/dashboard"/> : null;
    return (
      <div className="green-hex-background">
        {redirectAfterSignup}
        <div className="form-container">
          <UserDataForm title="Signup" inputData={inputs} redirectUser={this.redirectAfterLogin}/>
        </div>
      </div>
    );
  }
}
