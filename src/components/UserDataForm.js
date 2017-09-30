import React, { Component } from 'react';
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
    console.log('form was submitted with email', this.state.emailValue);
    console.log('passowrd', this.state.passwordValue);
    
  }

  handleChange(e, inputType){
    //email or password
    console.log('handleChange was called with', inputType);
    console.log('e.target.value', e.target.value);
    
    if(inputType === "Email"){
      this.setState({
        emailValue: e.target.value
      });
    }

    if(inputType="Password"){
      this.setState({
        passwordValue: e.target.value
      });
    }
  }

  render(){
    let inputs = this.props.inputData.map((inputObj, i) => {
      return (
        <input 
          className="form-input" 
          key={i} type={inputObj.type} 
          placeholder={inputObj.placeholder} 
          required="true"
          onChange={(e) => {
            this.handleChange(e, inputObj.placeholder);
          }}
        />
      )
    });

    return (
      <div>
        <h3>{this.props.title}</h3>
        <div id="login-form">
          <form onSubmit={this.handleSubmit} className="user-data-form">
            {inputs}
            <input className="submit-button" type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    )
  }
}
