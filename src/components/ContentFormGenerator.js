import React, { Component } from 'react';
import FormInstructionsContainer from './FormInstructionsContainer';
import { validateBlogForm, validateNewsletterForm, validateArticleForm } from '../helpers/form_validation.js';

export default class ContentFormGenerator extends Component {

    handleSubmit(e){
        e.preventDefault();
        let type = e.target.id;
        if (type === "blog"){
            validateBlogForm();    
        } else if (type === "newsletter"){
            validateNewsletterForm();
        } else {
            //its an article
            validateArticleForm();
        }
    }

    render() {
        let inputs = this.props.inputs.map((inputObj, i) => {
            let classes = inputObj.classes.join(' ');
            return (
                <div key={i} className="blog-form-row">
                    <h2 className="blog-forminput-header">{inputObj.inputHeader}</h2>
                    <label htmlFor={inputObj.inputFor}>
                        <input name={inputObj.inputName} className={classes}/>
                    </label>
                    <FormInstructionsContainer instructions={inputObj.instructions}/>
                </div>
            )
        });

        let textAreas = this.props.textAreas.map((textAreaObj, i) => {
            let classes = textAreaObj.classes.join(' ');
            return (
                <div key={i} className="blog-form-row">
                    <h2 className="blog-forminput-header">{textAreaObj.inputHeader}</h2>
                    <label htmlFor={textAreaObj.labelFor}>
                        <textarea name={textAreaObj.inputName} rows={textAreaObj.rows} cols={textAreaObj.cols} className={classes} defaultValue={textAreaObj.defaultText}/>
                    </label>
                    <FormInstructionsContainer instructions={textAreaObj.instructions}/>
                </div>
            )
        });

        return (
            <form id={this.props.id} onSubmit={this.handleSubmit}>
                {inputs}
                {textAreas}
                <div className="blog-form-row last">
                    <input type="submit" value="Submit" className="new-blog-submit"/>
                </div>
            </form>
        )
    }
}