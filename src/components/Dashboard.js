import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Dashboard extends Component{

    constructor(props){
        super(props);
        this.state  = {
            loggedIn: false
        }
    }

    componentWillMount(){
        let loggedIn = this.props.checkLoginState();
        if (loggedIn){
            

            this.setState({
                loggedIn: true
            })
        }
        
    }
    

    render(){
        let redirect = this.state.loggedIn ? null : <Redirect to="/login" />
        return (
            <div className="main-dash-container">
                {redirect}
                <h1>welcome to the dashboard page</h1>
            </div>
        )
    }
}