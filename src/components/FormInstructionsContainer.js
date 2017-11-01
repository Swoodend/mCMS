import React, { Component } from 'react';

export default class FormInstructionsContainer extends Component {

    constructor(props){
        super(props);
        this.handleEnter = this.handleEnter.bind(this);
        this.handleLeave = this.handleLeave.bind(this);

        this.state = {
            defaultInstructions: "What\'s this?",
            instructions : {
                
                url: `This field expects to receive the URL that you will be able to view your blog post at`,

                blogBarColor: `Blog bar color takes a hex color code as a value (ie. #FF0000). 
                               Four coloured bars make up a small banner that runs 100% of the 
                               width of the page for a stylish effect.`,
                
                blogHeader: `The blog header is a large centered piece of text at the top of your page. 
                             Usually you will want this to be the title of your blog.`,

                carouselImage: `Carousel images are used to display images that can be scrolled through on your blog.
                                The carousel itself is found near the top of your blog page. Usually the images are representative
                                of whatever your blog is discussing. A carousel with only one image will display as a static image.`,
                        
                bodyContent: `Body content is the main text that you wish to display in your blog post. It is the most prominent and
                              information-laden text on the page. Due to this it is centered in the middle of your blog post underneath
                              the carousel.`,

                rightMiniNavText: `Blogs feature a mini navbar on the right side of the page. The items in the navbar can link to anywhere you desire. 
                                   This field receives the text that you would like to display as a link.`,

                rightMiniNavHref: `Blogs feature a mini navbar on the right side of the page. The items in the navbar can link to anywhere you desire.
                                   This field receives the href that you would like your nav item to link to.`,

                footerSocialMedia: `This field expects a link to the appropriate social media as indicated on the form descriptor. 
                                    In the footer of your blog page, the appropriate social media icon will be visible with a 
                                    link to whatever is provided in this field.`,

                contact: `Contact information can be found in the footer section of your blog. 
                          This field expects an email or phone number you wish to share with the public.`,

                address: `Address information can be found in the footer section of your blog.
                          This field expects the address of your business.`,

                generalLinkText: `This is a general link to anything that you can include in the footer section of your blog.`,

                generalLinkHref: `This field is paired with the general link text form. This field expects the link that you wish your text to direct your browser to.`
            }
        }
    }

    handleEnter(){
        this.setState({
            defaultInstructions : false
        })
    }
    
    handleLeave(){
        this.setState({
            defaultInstructions : "What\'s this?"
        })
    }

    render(){
        return( 
            <div onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} className={"blog-forminput-instructions-container" + ' ' + this.props.specialStyle}>
                <h3 className="blog-forminput-instructions">
                    {this.state.defaultInstructions || this.state.instructions[this.props.instructions]}
                </h3>
            </div>
        )
    }
}