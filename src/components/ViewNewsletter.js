import React, { Component } from 'react';

export default class ViewNewsletters extends Component {
    render(){
        return (
            <h1>ViewNewsletter {this.props.match.params.newsletterUrl}</h1>
        );
    }
}