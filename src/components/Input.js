import React, { Component } from 'react';

export default class Input extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, inputType){
        this.props.updateParentState(e, this.props.type);
    }

    render(){
        return (
            <input 
                onChange={this.handleChange}
                className={this.props.className}
                type={this.props.type}
                placeholder={this.props.placeholder}
                required="true"    
            />
        )
    }
}