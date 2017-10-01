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

    let requestConfig = {
      method: "POST",
      body: JSON.stringify({
        email,
        password
      }),
      headers: {"Content-type":"application/json"}
    };

    if (formType === "Login"){
      fetch('/api/login', requestConfig)
        .then((res) => {
          return res.json();
        }).then((res) => {
          if(res.status === "OK"){
            console.log('redirect to dashboard');
          }
        })
    }

    if (formType === "Signup"){
      fetch('/api/signup', requestConfig)
        .then((res) => {
          return res.json();
        }).then((res) => {
          if (res.status === "OK"){
            console.log('redirect to dashboard');
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
