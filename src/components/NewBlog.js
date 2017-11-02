import React, { Component } from 'react';
import FormInstructionsContainer from './FormInstructionsContainer';
import ContentFormGenerator from './ContentFormGenerator';
import '../styles/newblog.css';

export default class NewBlog extends Component {

    render(){
        return (
            <div className="new-blog-main-container">
                <ContentFormGenerator
                    inputs={
                        [
                            {
                                inputHeader: "Blog URL",
                                labelFor: "burl",
                                inputName: "burl",
                                classes: ["blog-url", "nb-main-input"],
                                instructions: 'url'
                            },
                            {
                                inputHeader: "Blog Bar Color 1",
                                labelFor: "bb1",
                                inputName: "bb1",
                                classes: ["blog-url", "nb-main-input"],
                                instructions: "blogBarColor"
                            },
                            {
                                inputHeader: "Blog Bar Color 2",
                                labelFor: "bb2",
                                inputName: "bb2",
                                classes: ["blog-url", "nb-main-input"],
                                instructions: "blogBarColor"
                            },
                            {
                                inputHeader: "Blog Bar Color 3",
                                labelFor: "bb3",
                                inputName: "bb3",
                                classes: ["blog-url", "nb-main-input"],
                                instructions: "blogBarColor"
                            },
                            {
                                inputHeader: "Blog Bar Color 4",
                                labelFor: "bb4",
                                inputName: "bb4",
                                classes: ["blog-url", "nb-main-input"],
                                instructions: "blogBarColor"
                            },
                            {
                                inputHeader: "Blog Header",
                                labelFor: "blog-header",
                                inputName: "blog-header",
                                classes: ["blog-header", "nb-main-input"],
                                instructions: "blogHeader"
                            },
                            {
                                inputHeader: "Carousel Image 1",
                                labelFor: "bci1",
                                inputName: "bci1",
                                classes: ["blog-carousel-image-1", "nb-main-input"],
                                instructions: "carouselImage"
                            },
                            {
                                inputHeader: "Carousel Image 2",
                                labelFor: "bci2",
                                inputName: "bci2",
                                classes: ["blog-carousel-image-2", "nb-main-input"],
                                instructions: "carouselImage"
                            },                            {
                                inputHeader: "Carousel Image 3",
                                labelFor: "bci3",
                                inputName: "bci3",
                                classes: ["blog-carousel-image-3", "nb-main-input"],
                                instructions: "carouselImage"
                            },                            {
                                inputHeader: "Carousel Image 4",
                                labelFor: "bci4",
                                inputName: "bci4",
                                classes: ["blog-carousel-image-4", "nb-main-input"],
                                instructions: "carouselImage"
                            },
                            {
                                inputHeader: "Right Mini Nav Text 1",
                                labelFor: "brmnt1",
                                inputName: "brmnt1",
                                classes: ["blog-right-mini-nav-text-1", "nb-main-input"],
                                instructions: "rightMiniNavText"
                            },
                            {
                                inputHeader: "Right Mini Nav Link 1",
                                labelFor: "brmnl1",
                                inputName: "brmnl1",
                                classes: ["blog-right-mini-nav-link-1", "nb-main-input"],
                                instructions: "rightMiniNavHref"
                            },
                            {
                                inputHeader: "Right Mini Nav Text 2",
                                labelFor: "brmnt2",
                                inputName: "brmnt2",
                                classes: ["blog-right-mini-nav-text-2", "nb-main-input"],
                                instructions: "rightMiniNavText"
                            },
                            {
                                inputHeader: "Right Mini Nav Link 2",
                                labelFor: "brmnl2",
                                inputName: "brmnl2",
                                classes: ["blog-right-mini-nav-link-2", "nb-main-input"],
                                instructions: "rightMiniNavHref"
                            },
                            {
                                inputHeader: "Right Mini Nav Text 3",
                                labelFor: "brmnt3",
                                inputName: "brmnt3",
                                classes: ["blog-right-mini-nav-text-3", "nb-main-input"],
                                instructions: "rightMiniNavText"
                            },
                            {
                                inputHeader: "Right Mini Nav Link 3",
                                labelFor: "brmnl3",
                                inputName: "brmnl3",
                                classes: ["blog-right-mini-nav-link-3", "nb-main-input"],
                                instructions: "rightMiniNavHref"
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

                    textAreas={
                        [
                            {
                                inputHeader: "Body Content Text",
                                labelFor: "bbc",
                                inputName: "bbc",
                                rows: "15",
                                cols: "100",
                                defaultText: "Write your blog post here!",
                                classes: ["blog-body-content", "nb-main-textarea"],
                                instructions: "bodyContent"
                            }
                        ]
                    }
                
                />
            </div>
        )
    }
}