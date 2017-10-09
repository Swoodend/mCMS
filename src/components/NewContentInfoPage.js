import React, { Component } from 'react';
import '../styles/newcontentinfopage.css';

export default class NewContentInfoPage extends Component {
    render(){
        return (
            <div className="new-content-info-container">
                <div className="icon-row">
                    <i className="fa fa-pencil-square-o fa-5x"/>
                    <i className="fa fa-comment-o fa-5x"/>
                    <i className="fa fa-newspaper-o fa-5x"/>
                </div>
                <div className="descriptor-container">
                    <div className="descriptor">
                        <span className="leading-word-big">Blog -</span>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                    <div className="descriptor">
                        <span className="leading-word-big">Article -</span>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                    <div className="descriptor">
                        <span className="leading-word-big">Newsletter -</span>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}