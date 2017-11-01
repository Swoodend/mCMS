import React, { Component } from 'react';
import FormInstructionsContainer from './FormInstructionsContainer';
import '../styles/newblog.css';

export default class NewBlog extends Component {

    render(){
        return (
            <div className="new-blog-main-container">
                <form>
                    <div className="blog-form-row">
                            <h2 className="blog-forminput-header">Blog URL</h2>
                            <label for ="bb1">
                                <input name="bb1" className="blog-bar-color-1 nb-main-input"/>
                            </label>
                            <FormInstructionsContainer instructions={'url'}/>
                    </div>
                    
                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">Blog bar color 1</h2>
                        <label for ="bb1">
                            <input name="bb1" className="blog-bar-color-1 nb-main-input"/>
                        </label>
                        <FormInstructionsContainer instructions={'blogBarColor'}/>
                    </div>

                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">Blog bar color 2</h2>
                        <label for ="bb2">
                            <input name="bb2" className="blog-bar-color-2 nb-main-input"/>
                        </label>
                        <FormInstructionsContainer instructions={'blogBarColor'}/>
                    </div>

                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">Blog bar color 3</h2>
                        <label for ="bb3">
                            <input name="bb3" className="blog-bar-color-3 nb-main-input"/>
                        </label>
                        <FormInstructionsContainer instructions={'blogBarColor'}/>
                    </div>
                    
                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">Blog bar color 4</h2>
                        <label for ="bb4">
                            <input name="bb4" className="blog-bar-color-4 nb-main-input" />
                        </label>
                        <FormInstructionsContainer instructions={'blogBarColor'}/>
                    </div>                   
                    
                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">Blog Header</h2>
                        <label for ="blog-header">
                            <input name="blog-header" className="blog-header nb-main-input"/>
                        </label>
                        <FormInstructionsContainer instructions={'blogHeader'}/>
                    </div>
                    
                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">Carousel Image 1</h2>
                        <label for ="bci1">
                            <input name="bci1" className="blog-carousel-image-1 nb-main-input"/>
                        </label>
                        <FormInstructionsContainer instructions={'carouselImage'}/>
                    </div>

                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">Carousel Image 2</h2>
                        <label for ="bci2">
                            <input name="bci2" className="blog-carousel-image-2 nb-main-input"/>
                        </label>
                        <FormInstructionsContainer instructions={'carouselImage'}/>
                    </div>

                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">Carousel Image 3</h2>
                        <label for ="bci3">
                            <input name="bci3" className="blog-carousel-image-3 nb-main-input"/>
                        </label>
                        <FormInstructionsContainer instructions={'carouselImage'}/>
                    </div>

                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">Carousel Image 4</h2>
                        <label for ="bci4">
                            <input name="bci4" className="blog-carousel-image-4 nb-main-input"/>
                        </label>
                        <FormInstructionsContainer instructions={'carouselImage'}/>
                    </div>


                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header accomodate-textarea-left">Body content text</h2>
                        <label for ="bbc">
                            <textarea name="bbc" rows="15" cols="100" className="blog-body-content nb-main-textarea">
                                Write your blog post here!
                            </textarea>
                        </label>
                        <FormInstructionsContainer instructions={'bodyContent'} specialStyle="accomodate-textarea-right"/>
                    </div>
                    

                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">Right mini nav text 1</h2>                    
                        <label for ="brmnt1">
                            <input name="brmnt1" className="blog-right-mini-nav-text-1 nb-main-input"/>
                        </label>
                        <FormInstructionsContainer instructions={'rightMiniNavText'}/>
                    </div>
                    
                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">Right mini nav link 1</h2>                    
                        <label for ="brmnl1">
                            <input name="brmnl1" className="blog-right-mini-nav-link-1 nb-main-input"/>
                        </label>
                        <FormInstructionsContainer instructions={'rightMiniNavHref'}/>
                    </div>

                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">Right mini nav text 2</h2>                    
                        <label for ="brmnt2">
                            <input name="brmnt2" className="blog-right-mini-nav-text-2 nb-main-input"/>
                        </label>
                        <FormInstructionsContainer instructions={'rightMiniNavText'}/>
                    </div>

                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">Right mini nav link 2</h2>                    
                        <label for ="brmnl2">
                            <input name="brmnl2" className="blog-right-mini-nav-link-2 nb-main-input"/>
                        </label>
                        <FormInstructionsContainer instructions={'rightMiniNavHref'}/>
                    </div>

                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">Right mini nav text 3</h2>                    
                        <label for ="brmnt3">
                            <input name="brmnt3" className="blog-right-mini-nav-text-3 nb-main-input"/>
                        </label>
                        <FormInstructionsContainer instructions={'rightMiniNavText'}/>
                    </div>

                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">Right mini nav link 3</h2>                    
                        <label for ="brmnl3">
                            <input name="brmnl3" className="blog-right-mini-nav-link-3 nb-main-input" />
                        </label>
                        <FormInstructionsContainer instructions={'rightMiniNavHref'}/>
                    </div>
                    
                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">Facebook link</h2>                                        
                        <label for ="flfb">
                            <input name="flfb" className="footer-link-facebook nb-main-input"/>
                        </label>
                        <FormInstructionsContainer instructions={'footerSocialMedia'}/>
                    </div>
                    
                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">Instagram link</h2>                                        
                        <label for ="flinsta">
                            <input name="flinsta" className="footer-link-instagram nb-main-input"/>
                        </label>
                        <FormInstructionsContainer instructions={'footerSocialMedia'}/>
                    </div>

                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">Snapchat link</h2>                                        
                        <label for ="flsnap">
                            <input name="flsnap" className="footer-link-snapchat nb-main-input"/>
                        </label>
                        <FormInstructionsContainer instructions={'footerSocialMedia'}/>
                    </div>
                    

                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">Contact (email, phone, etc)</h2>  
                        <label for ="footer-contact">
                            <input name="footer-contact" className="footer-contact nb-main-input"/>
                        </label>
                        <FormInstructionsContainer instructions={'contact'}/>
                    </div>

                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">Address</h2>  
                        <label for ="footer-Address">
                            <input name="footer-Address" className="footer-Address nb-main-input"/>
                        </label>
                        <FormInstructionsContainer instructions={'address'}/>
                    </div>

                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">General link 1 text</h2>  
                        <label for ="ftul1">
                            <input name="ftul1" className="footer-text-userlink1 nb-main-input"/>
                        </label>
                        <FormInstructionsContainer instructions={'generalLinkText'}/>
                    </div>

                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">General link 1 href</h2>  
                        <label for ="ftul1">
                            <input name="ftul1" className="footer-text-userlink1 nb-main-input"/>
                        </label>
                        <FormInstructionsContainer instructions={'generalLinkHref'}/>
                    </div>

                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">General link 2 text</h2>  
                        <label for ="ftul2">
                            <input name="ftul2" className="footer-text-userlink2 nb-main-input"/>
                        </label>
                        <FormInstructionsContainer instructions={'generalLinkText'}/>
                    </div>

                    <div className="blog-form-row">
                        <h2 className="blog-forminput-header">General link 2 href</h2>  
                        <label for ="ftul2">
                            <input name="ftul2" className="footer-text-userlink2 nb-main-input"/>
                        </label>
                        <FormInstructionsContainer instructions={'generalLinkHref'}/>
                    </div>

                    <div className="blog-form-row last">
                        <input type="submit" value="Submit" className="new-blog-submit"/>
                    </div>
                </form>
            </div>
        )
    }
}