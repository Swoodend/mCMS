import React, { Component } from 'react';
import UploadImageModal from './UploadImageModal';
import '../styles/dashuserdisplay.css';

export default class DashUserDisplay extends Component {
	
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			displayingUploadModal:  false
		}
	}

	handleClick(){
		this.setState({
			displayingUploadModal: !this.state.displayingUploadModal
		})
	}

	render(){
		let currentUser = localStorage.getItem("currentUser");
		let { displayingUploadModal } = this.state;
	
		return (
			<div className="main-userdisplay-container">

				<div className="move-down">
					<h1>Hi {currentUser}, welcome to your dashboard</h1>
				</div>
				<img 
						className="profile-img" 
						src={this.props.profileImg || "http://via.placeholder.com/250x250"}
				/>
				<div className="change-image-container">
					<div onClick={this.handleClick} className="change-image-button">Change Image</div>
				</div>

				{displayingUploadModal && <UploadImageModal closeModal={this.handleClick}/>}

			</div>
		)
	}
}