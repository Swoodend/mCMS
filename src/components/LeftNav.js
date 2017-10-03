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
                <div className="left-nav">
                    <div onClick={this.handleClick} className="collapsable nav-item">
                        <i className="fa fa-pencil"/>  New  <i className="chevron-icon fa fa-chevron-down"/>
                        {!this.state.collapsed && 
                            <ul>
                                <li>Blog</li>
                                <li>Article</li>
                                <li>Newsletter</li>
                            </ul>
                        }
                    </div>
                    <div className="nav-item">
                        <i className="fa fa-newspaper-o"/>My Content
                    </div>
                    <div className="nav-item">
                        <i className="fa fa-gear"/>  My Account
                    </div>
                </div>
            </div>
        )
    }
}