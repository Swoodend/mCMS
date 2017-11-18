import React, { Component } from 'react';

export default class ViewArticle extends Component{
    constructor(props){
        super(props);
        // eventually set state to a component
        this.state = {
            article: null,
            notFound: null
        }
    }

    componentDidMount(){
        fetch(`/api/article/${this.props.match.params.articleUrl}`)
        .then((res) => {
            return res.json();
        })
        .then((article) => {
            console.log('arty', article);
            if (article.status === "no article found"){
                // eventually set state to a NotFound component
                this.setState({notFound: <h1>No article found</h1>});                
            } else {
                // eventually set state to an Article component and pass props
                this.setState({article});                                
            }
        })
    }

    render(){
        return (
            <div>
                {this.state.article && (
                    <h1>Found an article: {this.state.article.header} by {this.state.article.creator}</h1>
                )}
                {this.state.notFound}
            </div>
        );
    }
}