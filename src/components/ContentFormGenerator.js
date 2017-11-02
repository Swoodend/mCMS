import React, { Component } from 'react';
import FormInstructionsContainer from './FormInstructionsContainer';

export default class ContentFormGenerator extends Component {
    render() {
        let inputs = this.props.inputs.map((inputObj) => {
            let classes = inputObj.classes.join(' ');
            return (
                <div className="blog-form-row">
                    <h2 className="blog-forminput-header">{inputObj.inputHeader}</h2>
                    <label for={inputObj.inputFor}>
                        <input name={inputObj.inputName} className={classes}/>
                    </label>
                    <FormInstructionsContainer instructions={inputObj.instructions}/>
                </div>
            )
        });

        let textAreas = this.props.textAreas.map((textAreaObj) => {
            let classes = textAreaObj.classes.join(' ');
            return (
                <div className="blog-form-row">
                    <h2 className="blog-forminput-header">{textAreaObj.inputHeader}</h2>
                    <label for={textAreaObj.labelFor}>
                        <textarea name={textAreaObj.inputName} rows={textAreaObj.rows} cols={textAreaObj.cols} className={classes}>
                            {textAreaObj.defaultText}
                        </textarea>
                    </label>
                    <FormInstructionsContainer instructions={textAreaObj.instructions}/>
                </div>
            )
        });

        return (
            <form>
                {inputs}
                {textAreas}
                <div className="blog-form-row last">
                    <input type="submit" value="Submit" className="new-blog-submit"/>
                </div>
            </form>
        )
    }
}
