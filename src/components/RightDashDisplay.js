import React, { Component } from 'react';
import DashUserDisplay from './DashUserDisplay';

export default class RightDashDisplay extends Component {

	render(){
		return (
			<div>{this.props.currentView}</div>
		)
	}
}