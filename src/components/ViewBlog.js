import React, { Component } from 'react';

export default class ViewBlog extends Component {

    constructor(props){
        super(props);
        // eventually set state to a component
        this.state = {
            blog: null,
            notFound: null
        }
    }

    componentWillMount(){
        this.props.hideNav();
    }

    componentDidMount(){
        fetch(`/api/blog/${this.props.match.params.blogUrl}`)
        .then((res) => {
            return res.json();
        }).then((blog) => {
            if (blog.status === "no blog found"){
                // eventually set state to a NotFound component
                this.setState({notFound: <h1>NO BLOG FOUND</h1>});
            } else {
                // eventually set state to an Article component and pass props
                this.setState({blog});        
            }
        })
    }

    render(){
        return (
            <div>
                {this.state.blog && (
                    <h1>Got a blog: {this.state.blog.url} by {this.state.blog.creator}</h1>
                )}
                {this.state.notFound}
            </div>
        );
    }
}