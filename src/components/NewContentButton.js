import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NewContentButton extends Component {
    render() {
        let buttonStyle = {
            height: "38px",
            background: "#00a887",
            color: "white",
            lineHeight: "38px",
            minWidth: "150px",
            textAlign: "center"
        };
        return (
            <Link to={"/new" + this.props.href}>
                <div style={buttonStyle}>New {this.props.contentType}</div>
            </Link>
        )
    }
}