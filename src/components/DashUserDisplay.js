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
			avatarPath: null,
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
			}).then(() => {
				fetch('/api/get-avatar/' + this.state.currentUser)
					.then((res) => {
						return res.json();
					})
					.then((res) => {
						this.setState({
							avatarPath: res.avatarPath
						})
					})
			})

	}

	handleClick(){
		this.setState({
			displayingUploadModal: !this.state.displayingUploadModal
		}, () => {
			let {displayingUploadModal} = this.state;
			//only fetch user images when they are opening the modal, not when closing it
			if (displayingUploadModal){
				console.log('fetch users avatars here');
			}
		})
	}

	onAvatarUpload(responseObj){
		this.setState({
			avatarPath: responseObj.avatarPath
		});
	}

	render(){
		let { displayingUploadModal } = this.state;
	
		return (
			<div className="main-userdisplay-container">

				<div className="move-down">
					<h1>Hi {this.state.currentUser}, welcome to your dashboard</h1>
				</div>
				<img className="profile-img" src={this.state.avatarPath || 'http://via.placeholder.com/250x250'}/>
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