import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LeftNav from './LeftNav';
import RightDashDisplay from './RightDashDisplay';
import DashUserDisplay from './DashUserDisplay';
import NewContentInfoPage from'./NewContentInfoPage';
import "../styles/dashboard.css";

export default class Dashboard extends Component{

	constructor(props){
		super(props);
		this.setNewView = this.setNewView.bind(this);
		this.state  = {
				loggedIn: false,
				rightDashView: <DashUserDisplay/>
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

	setNewView(view){
		this.setState({
			rightDashView: view
		})
	}
    

	render(){
		let redirect = this.state.loggedIn ? null : <Redirect to="/login" />
		return (
			<div className="main-dash-container">
				{redirect}
				<LeftNav changeView={this.setNewView} />
				<RightDashDisplay currentView={this.state.rightDashView}/>
			</div>
		)
	}
}