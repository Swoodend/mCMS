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

    this.state = {
      loggedIn: false
    }
  }



  checkLogin(){
    return localStorage.getItem("currentUser");
  }

  render(){
      return (
        <BrowserRouter>
          <div>
            <Navbar checkLoginState={this.checkLogin}/>
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
              return <ViewBlog {...props}/>
            }}/>
            <Route path="/article/:articleUrl" render={(props) => {
              return <ViewArticle {...props}/>
            }}/>
            <Route path="/newsletter/:newsletterUrl" render={(props) => {
              return <ViewNewsletter {...props}/>
            }}/>
          </div>
        </BrowserRouter>
      );
  }
}
