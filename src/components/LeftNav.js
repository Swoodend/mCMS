import React, { Component } from 'react';
import { Link } from 'react-router';
import "../styles/leftnav.css";

export default class LeftNav extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            collapsed : true
        }
    }

    handleClick(){
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    
    render(){

        return (
            <div className="left-nav-container">
                <div onClick={this.handleClick} className="one">
                    <i id="pencil-icon" className="fa fa-pencil"/>New<i id="chev-down" className="fa fa-chevron-down"/>
                </div>
                {!this.state.collapsed && 
                <div>
                    <div className="two">
                        <i className="fa fa-chevron-right"/>Blog
                    </div>
                    <div className="two">
                        <i className="fa fa-chevron-right"/>Article
                    </div>
                    <div className="two">
                        <i className="fa fa-chevron-right"/>Newsletter
                    </div>        	  
                </div>
                }  
                <div className="one"><i id="np-icon" className="fa fa-newspaper-o"/>My Content</div>
                <div className="one"><i id="gear-icon" className="fa fa-gear"/>My Account</div>
            </div>
        )
    }
}