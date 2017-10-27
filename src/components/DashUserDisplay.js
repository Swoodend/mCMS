import React, { Component } from 'react';
import UploadImageModal from './UploadImageModal';
import '../styles/dashuserdisplay.css';
import '../styles/uploadimagemodal.css';

export default class DashUserDisplay extends Component {
	
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.onAvatarUpload = this.onAvatarUpload.bind(this);
		this.state = {
			displayingUploadModal:  false,
			currentUser: null,
			originalName: null
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

	onAvatarUpload(currentUser, originalName){
		console.log('in onAvatarUpload with', currentUser, originalName);
		this.setState({
			currentUser,
			originalName
		})
	}

	render(){
		let { displayingUploadModal } = this.state;
		let avatarSrc = this.state.originalName ? 
		"http://localhost:3001/public/uploads/" + this.state.currentUser + '/' + this.state.originalName :
		"http://via.placeholder.com/250x250"
	
		return (
			<div className="main-userdisplay-container">

				<div className="move-down">
					<h1>Hi {this.state.currentUser}, welcome to your dashboard</h1>
				</div>
				<img className="profile-img" src={avatarSrc}/>
				<div className="change-image-container">
					<div onClick={this.handleClick} className="change-image-button">Change Image</div>
				</div>

				{displayingUploadModal && <UploadImageModal  
					closeModal={this.handleClick}
					onAvatarUpload={this.onAvatarUpload}
					/>}

			</div>
		)
	}
}