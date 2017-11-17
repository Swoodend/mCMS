import React, { Component } from 'react';

export default class ViewBlog extends Component {
    componentWillMount(){
        console.log('wooo!!!', this.props.match.params.blogUrl);
    }

    render(){
        return (
            <h1>ViewBlog {this.props.match.params.blogUrl}</h1>
        );
    }
}