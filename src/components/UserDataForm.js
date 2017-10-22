import React, { Component } from 'react';
import Input from './Input';
import '../styles/userdataform.css';

export default class UserDataForm extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      emailValue: '',
      passwordValue: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();

    let formType = this.props.title;
    let email = this.state.emailValue;
    let password = this.state.passwordValue;
    let token = localStorage.getItem("currentUser") || false

    let requestConfig = {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        token: token
      }),
      headers: {"Content-type":"application/json"}
    };

    if (formType === "Login"){
      fetch('/api/login', requestConfig)
        .then((res) => {
          return res.json();
        }).then((res) => {
          if(res.status === "OK"){
            //TODO: Set this to something more secure in the future, encrypt an identifier (their email i guess) with a time of session expiry.
            //every call to DB must validate token and then log the user out if it is expired.
            localStorage.setItem("currentUser", res.token);
            window.location.href = 'http://localhost:3000/dashboard';
            //redirect like this because react router doesnt trigger component will mount?
            // this.props.redirectUser();
          } else {
            //flash message here eventually
            console.log(res.status);
          }
        })
    }

    if (formType === "Signup"){
      fetch('/api/signup', requestConfig)
        .then((res) => {
          return res.json();
        }).then((res) => {
          if (res.status === "OK"){
            localStorage.setItem("currentUser", res.token);
            window.location.href="http://localhost:3000/dashboard";
            //redirect like this because react router doesnt trigger component will mount?
            //this.props.redirectUser();
          }
        })
    }
    
  }

  handleChange(e, inputType){
    
    if(inputType === "email"){
      this.setState({
        emailValue: e.target.value
      });
    }

    if(inputType="password"){
      this.setState({
        passwordValue: e.target.value
      });
    }
  }

  render(){
    console.log('user data form rendering...this.props.setLogin', this.props.setLogin);
    let inputs = this.props.inputData.map((inputObj, i) => {
      return (
        <Input 
          className="form-input" 
          key={i} 
          type={inputObj.type} 
          placeholder={inputObj.placeholder} 
          required="true"
          updateParentState={this.handleChange}
        />
      )
    });

    return (
      <div>
        <h3>{this.props.title}</h3>
        <div id="login-form">
          <form onSubmit={this.handleSubmit}
            className="user-data-form">
            {inputs}
            <input className="submit-button" type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    )
  }
}
