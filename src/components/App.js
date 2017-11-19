import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import Account from './Account';
import ContentPage from './ContentPage';
import NewBlog from './NewBlog';
import NewNewsletter from './NewNewsletter';
import NewArticle from './NewArticle';
import ViewBlog from './ViewBlog';
import ViewArticle from './ViewArticle';
import ViewNewsletter from './ViewNewsletter';

export default class App extends Component {

  constructor(props){
    super(props);
    this.checkLogin = this.checkLogin.bind(this);
    this.hideNav = this.hideNav.bind(this);
    this.state = {
      loggedIn: false,
      navbar: <Navbar checkLoginState={this.checkLogin}/>
    }
  }



  checkLogin(){
    return localStorage.getItem("currentUser");
  }

  hideNav(){
    this.setState({navbar: null});
  }

  render(){
      return (
        <BrowserRouter>
          <div>
            {this.state.navbar}
            <Route exact path="/" component={Home}/>

            <Route path="/login" render={() => {
              {if(localStorage.getItem('currentUser')){
                return <Redirect to="/dashboard"/>
              } else {
                return <Login/>
              }}
            }}/>
            
            <Route path="/signup" render={() => {
              {if(localStorage.getItem('currentUser')){
                return <Redirect to="/dashboard"/>
              } else {
                return <Signup/>
              }}
            }}/>
            
            <Route path='/dashboard' render={() => (
              <Dashboard checkLoginState={this.checkLogin} />
            )}/>
            
            <Route path="/account" component={Account}/>
            <Route path="/content" component={ContentPage}/>
            <Route path="/new/blog" component={NewBlog}/>
            <Route path="/new/article" component={NewArticle}/>
            <Route path="/new/newsletter" component={NewNewsletter}/>
            <Route path="/blog/:blogUrl" render={(props) => {
              return <ViewBlog {...props} hideNav={this.hideNav}/>
            }}/>            
            <Route path="/article/:articleUrl" render={(props) => {
              return <ViewArticle {...props}  hideNav={this.hideNav}/>
            }}/>
            <Route path="/newsletter/:newsletterUrl" render={(props) => {
              return <ViewNewsletter {...props} hideNav={this.hideNav}/>
            }}/>
          </div>
        </BrowserRouter>
      );
  }
}
