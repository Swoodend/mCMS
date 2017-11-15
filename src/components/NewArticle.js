import React, { Component } from 'react';
import ContentFormGenerator from './ContentFormGenerator';

export default class NewArticle extends Component {
    render(){
        return (
            <div className="new-blog-main-container">
                <ContentFormGenerator
                    id="article"
                    action="/api/new/article" 
                    inputs= {
                        [
                            {
                                inputHeader: "Article URL",
                                labelFor: "aurl",
                                inputName: "aurl",
                                classes: ["art-url", "nb-main-input"],
                                instructions: 'have to write this'
                            },
                            {
                                inputHeader: "Article Bar Color 1",
                                labelFor: "ab1",
                                inputName: "ab1",
                                classes: ["article-bar-color", "nb-main-input"],
                                instructions: "blogBarColor"
                            },
                            {
                                inputHeader: "Article Bar Color 2",
                                labelFor: "ab2",
                                inputName: "ab2",
                                classes: ["article-bar-color", "nb-main-input"],
                                instructions: "blogBarColor"
                            },
                            {
                                inputHeader: "Article Bar Color 3",
                                labelFor: "ab3",
                                inputName: "ab3",
                                classes: ["article-bar-color", "nb-main-input"],
                                instructions: "blogBarColor"
                            },
                            {
                                inputHeader: "Article Bar Color 4",
                                labelFor: "ab4",
                                inputName: "ab4",
                                classes: ["article-bar-color", "nb-main-input"],
                                instructions: "blogBarColor"
                            },
                            {
                                inputHeader: "Article Header",
                                labelFor: "article-header",
                                inputName: "article-header",
                                classes: ["article-header", "nb-main-input"],
                                instructions: "need to write instructions for this" 
                            },
                            {
                                inputHeader: "Newsletter Primary Image",
                                labelFor: "npi",
                                inputName: "npi",
                                classes: ["news-primary-image", "nb-main-input"],
                                instructions: "need to write instructions for this"
                            },
                            {
                                inputHeader: "Facebook Link",
                                labelFor: "flfb",
                                inputName: "flfb",
                                classes: ["footer-link-facebook", "nb-main-input"],
                                instructions: "footerSocialMedia"
                            },
                            {
                                inputHeader: "Instagram Link",
                                labelFor: "flinsta",
                                inputName: "flinsta",
                                classes: ["footer-link-instagram", "nb-main-input"],
                                instructions: "footerSocialMedia"
                            },
                            {
                                inputHeader: "Snapchat Link",
                                labelFor: "flsnap",
                                inputName: "flsnap",
                                classes: ["footer-link-snapchat", "nb-main-input"],
                                instructions: "footerSocialMedia"
                            },
                            {
                                inputHeader: "Contact (email, phone etc)",
                                labelFor: "footer-contact",
                                inputName: "footer-contact",
                                classes: ["footer-contact", "nb-main-input"],
                                instructions: "contact"
                            },
                            {
                                inputHeader: "Address",
                                labelFor: "footer-address",
                                inputName: "footer-address",
                                classes: ["footer-address", "nb-main-input"],
                                instructions: "address"
                            },
                            {
                                inputHeader: "General Link 1 Text",
                                labelFor: "ftult1",
                                inputName: "ftult1",
                                classes: ["footer-text-userlink1", "nb-main-input"],
                                instructions: "generalLinkText"
                            },
                            {
                                inputHeader: "General Link 1 HREF",
                                labelFor: "ftulh1",
                                inputName: "ftulh1",
                                classes: ["footer-text-userhref1", "nb-main-input"],
                                instructions: "generalLinkHref"
                            },
                            {
                                inputHeader: "General Link 2 Text",
                                labelFor: "ftult2",
                                inputName: "ftult2",
                                classes: ["footer-text-userlink2", "nb-main-input"],
                                instructions: "generalLinkText"
                            },
                            {
                                inputHeader: "General Link 2 HREF",
                                labelFor: "ftulh2",
                                inputName: "ftulh2",
                                classes: ["footer-text-userhref2", "nb-main-input"],
                                instructions: "generalLinkHref"
                            }
                        ]
                    }

                    textAreas= {
                        [
                            {
                                inputHeader: "Article Primary Content",
                                labelFor: "apc",
                                inputName: "apc",
                                rows:"15",
                                cols:"100",
                                defaultText: "Write your article here!",
                                classes: ["article-primary-contnet", "nb-main-textarea"],
                                instructions: "need to write instructions for this"
                            },
                        ]
                    }

                />
            </div>
        )
    }
}