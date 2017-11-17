import React, { Component } from 'react';

export default class ViewArticle extends Component{
    render(){
        return (
            <h1>ViewArticle {this.props.match.params.articleUrl}</h1>
        );
    }
}