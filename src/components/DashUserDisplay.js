import React, { Component } from 'react';
import UploadImageModal from './UploadImageModal';
import '../styles/dashuserdisplay.css';
import '../styles/uploadimagemodal.css';

export default class DashUserDisplay extends Component {
	
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			displayingUploadModal:  false,
			currentUser: null
		}
	}

	componentWillMount(){
		let requestConfig = {
			method: "POST", 
			headers: {"Content-type":"application/json"},
			body: JSON.stringify({
				token: localStorage.getItem("currentUser")
			})
		}
		
		fetch('/api/validate', requestConfig)
			.then((res) => {
				return res.json();
			}).then((res) => {
				if (res.status === "OK"){
					this.setState({
						currentUser: res.currentUser
					})
				}
			})
	}

	handleClick(){
		this.setState({
			displayingUploadModal: !this.state.displayingUploadModal
		})
	}

	render(){
		let { displayingUploadModal } = this.state;
	
		return (
			<div className="main-userdisplay-container">

				<div className="move-down">
					<h1>Hi {this.state.currentUser}, welcome to your dashboard</h1>
				</div>
				<img 
						className="profile-img" 
						src={this.props.profileImg || "http://localhost:3000/uploads/avatar.jpeg"}
				/>
				<div className="change-image-container">
					<div onClick={this.handleClick} className="change-image-button">Change Image</div>
				</div>

				{displayingUploadModal && <UploadImageModal closeModal={this.handleClick}/>}

			</div>
		)
	}
}