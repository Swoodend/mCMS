import React, { Component } from 'react';
import ContentFormGenerator from './ContentFormGenerator';

export default class NewNewsletter extends Component {
    render(){
        return (
            <div className="new-blog-main-container">
                <ContentFormGenerator
                    id="newsletter"
                    action="/api/new/newsletter" 
                    inputs= {
                        [
                            {
                                inputHeader: "Newsletter URL",
                                labelFor: "nurl",
                                inputName: "nurl",
                                classes: ["news-url", "nb-main-input"],
                                instructions: 'url'
                            },
                            {
                                inputHeader: "Newsletter Bar Color 1",
                                labelFor: "nb1",
                                inputName: "nb1",
                                classes: ["news-bar-color", "nb-main-input"],
                                instructions: "blogBarColor"
                            },
                            {
                                inputHeader: "Newsletter Bar Color 2",
                                labelFor: "nb2",
                                inputName: "nb2",
                                classes: ["news-bar-color", "nb-main-input"],
                                instructions: "blogBarColor"
                            },
                            {
                                inputHeader: "Newsletter Bar Color 3",
                                labelFor: "nb3",
                                inputName: "nb3",
                                classes: ["news-bar-color", "nb-main-input"],
                                instructions: "blogBarColor"
                            },
                            {
                                inputHeader: "Newsletter Bar Color 4",
                                labelFor: "nb4",
                                inputName: "nb4",
                                classes: ["news-bar-color", "nb-main-input"],
                                instructions: "blogBarColor"
                            },
                            {
                                inputHeader: "Newsletter Header",
                                labelFor: "news-header",
                                inputName: "news-header",
                                classes: ["news-header", "nb-main-input"],
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
                                inputHeader: "Newsletter Secondary Image 1",
                                labelFor: "nsi1",
                                inputName: "nsi1",
                                classes: ["news-secondary-image-1", "nb-main-input"],
                                instructions: "need to write instructions for this"
                            },
                            {
                                inputHeader: "Newsletter Secondary Image 2",
                                labelFor: "nsi2",
                                inputName: "nsi2",
                                classes: ["news-secondary-image-2", "nb-main-input"],
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
                                inputHeader: "Newsletter Primary Content",
                                labelFor: "npc",
                                inputName: "npc",
                                rows:"15",
                                cols:"100",
                                defaultText: "Write your newsletter here!",
                                classes: ["news-primary-contnet", "nb-main-textarea"],
                                instructions: "need to write instructions for this"
                            },
                        ]
                    }

                />
            </div>
        )
    }
}