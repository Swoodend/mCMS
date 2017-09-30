import React, { Component } from 'react';

export default class UserDataForm extends Component {

  render(){
    let inputs = this.props.inputData.map((inputObj, i) => {
      return <input type={inputObj.type} placeholder={inputObj.placeholder} required="true"/>
    });

    console.log(inputs);

    return (
      <form>
        {inputs}
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}
