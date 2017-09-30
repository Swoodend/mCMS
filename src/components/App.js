import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  componentWillMount(){
    let loggedIn = localStorage.getItem("currentUser");
    if (loggedIn){
      this.setState({
        loggedIn: true
      });
    }
  }

  render(){
      return (
        <BrowserRouter>
          <div>
            <Navbar/>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
          </div>
        </BrowserRouter>
      );
  }
}
