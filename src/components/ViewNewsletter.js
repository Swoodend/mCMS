import React, { Component } from 'react';

export default class ViewNewsletters extends Component {

    constructor(props){
        super(props);
        this.state = {
            newsletter: null,
            notFound: null
        }
    }

    componentWillMount(){
        this.props.hideNav();
    }

    componentDidMount(){
        fetch(`/api/newsletter/${this.props.match.params.newsletterUrl}`)
        .then((res) => {
            return res.json();
        })
        .then((newsletter) => {
            if(newsletter.status === "no newsletter found"){
                this.setState({notFound: <h1>no newletter found</h1>});
            } else {
                this.setState({newsletter});
            }
        })
    }

    render(){
        return (
            <div>
                {this.state.newsletter && (
                    <h1>Found newsletter {this.state.newsletter.header} {this.state.newsletter.creator}</h1>
                )}
                {this.state.notFound}
            </div>
        );
    }
}