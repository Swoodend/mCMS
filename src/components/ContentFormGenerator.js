import React, { Component } from 'react';
import FormInstructionsContainer from './FormInstructionsContainer';
import { validateForm } from '../helpers/form_validation.js';

export default class ContentFormGenerator extends Component {

    handleSubmit(e){
        let type = e.target.id;
        let errors = validateForm(e.target, type);
        let hasErrors = Object.keys(errors)[0] || [];
        if (hasErrors.length > 0){
            //make this a flash message sometime
            console.log('ERROR:', hasErrors, errors[hasErrors]);
            e.preventDefault();
        } else {
            //create blog obj in DB
            console.log('thats a pass');
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
            <form 
                action={this.props.action} 
                id={this.props.id} 
                onSubmit={this.handleSubmit}
                method="POST"
            >
                {inputs}
                {textAreas}
                <div className="blog-form-row last">
                    <input type="submit" value="Submit" className="new-blog-submit"/>
                </div>
            </form>
        )
    }
}
