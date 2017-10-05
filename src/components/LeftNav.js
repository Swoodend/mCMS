import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewContentInfoPage from './NewContentInfoPage';
import DashUserDisplay from'./DashUserDisplay';
import "../styles/leftnav.css";

export default class LeftNav extends Component {

	constructor(props){
		super(props);
		this.handleClickNew = this.handleClickNew.bind(this);
		this.state = {
				collapsed : true
		}
	}

	handleClickNew(){

		this.setState({
			collapsed: !this.state.collapsed
		}, () => {
			if (this.state.collapsed){
				this.props.changeView(<DashUserDisplay/>);
			} else {
				this.props.changeView(<NewContentInfoPage/>);
			}
		});
	}
	
	render(){
		let chevronDirection = this.state.collapsed ? 'down' : 'up';
		return (
			<div className="left-nav-container">
				<div onClick={this.handleClickNew} className="one">
					<i id="pencil-icon" className="fa fa-pencil"/>New<i id="chev-down" className={`fa fa-chevron-${chevronDirection}`}/>
				</div>
				{!this.state.collapsed && 
				<div>
					<Link to="/new/blog">
						<div className="two">
							<i className="sub-chev fa fa-chevron-right"/><span className="text-1">Blog</span>
						</div>
					</Link>
					<Link to="/new/article">
						<div className="two">
							<i className="sub-chev fa fa-chevron-right"/><span className="text-2">Article</span>
						</div>
					</Link>
					<Link to="/new/newsletter">
						<div className="two">
							<i className="sub-chev fa fa-chevron-right"/><span className="text-3">Newsletter</span>
						</div>
					</Link>
				</div>
				}
				<Link to="/content">  
					<div className="one"><i id="np-icon" className="fa fa-newspaper-o"/>My Content</div>
				</Link>
				<Link to="/account">
					<div className="one"><i id="gear-icon" className="fa fa-gear"/>My Account</div>
				</Link>
			</div>
		)
	}
}