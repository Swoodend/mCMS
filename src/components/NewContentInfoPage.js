import React, { Component } from 'react';
import NewContentButton from './NewContentButton';
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
                        <p>Blogs are the most content-dense option available to users. Each blog contains a main header, decorative nav,
                        Two pictures with sub-captions, main body content and a social media footer. Each blog post will also link to the next or
                        previous blog in the series.
                        </p>
                    </div>
                    <div className="descriptor">
                        <span className="leading-word-big">Article -</span>
                        <br/>
                        <p>Articles are the most academic/informative option available to users. They contain a main header and
                        main body content. Articles do not contain pictures. They do not link to other articles and instead
                        intended to be disconnected and more formal pieces of work.
                        </p>
                    </div>
                    <div className="descriptor">
                        <span className="leading-word-big">Newsletter -</span>
                        <br/>
                        <p>Newsletters are intended to be more formal than a blog, but less formal when compared to
                        an article. They feature a main header, one picture with subcaptions and main body content.
                        </p>
                    </div>
                </div>
                <div className="button-container">
                    <NewContentButton contentType="Blog" href="/blog"/>
                    <NewContentButton contentType="Article" href="/article"/>
                    <NewContentButton contentType="Newsletter" href="/newsletter"/>
                </div>
            </div>
        )
    }
}