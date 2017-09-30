import React, { Component } from 'react';
import '../styles/userdataform.css';

export default class UserDataForm extends Component {

  render(){
    let inputs = this.props.inputData.map((inputObj, i) => {
      return (
        <input className="form-input" key={i} type={inputObj.type} placeholder={inputObj.placeholder} required="true"/>
      )
    });

    return (
      <div>
        <h3>{this.props.title}</h3>
        <div id="login-form">
          <form className="user-data-form">
            {inputs}
            <input className="submit-button" type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    )
  }
}
