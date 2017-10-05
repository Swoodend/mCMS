import React, { Component } from 'react';
import '../styles/dashuserdisplay.css';

export default class DashUserDisplay extends Component {
	render(){
		let currentUser = localStorage.getItem("currentUser");
		return (
			<div className="main-userdisplay-container">

				<div className="move-down">
					<h1>{`Hi ${currentUser}, welcome to your dashboard`}</h1>
				</div>
				<img 
						className="profile-img" 
						src={this.props.profileImg || "http://via.placeholder.com/250x250"}
				/>

			</div>
		)
	}
}