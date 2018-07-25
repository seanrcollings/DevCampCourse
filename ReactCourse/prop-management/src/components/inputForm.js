import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormTitle } from "./formTitle";
import { FormInput, FormButton, FormTextArea, FormImage } from "./formFields";

class InputForm extends Component {
    constructor(props) {
        super(props)
        
        this.default = {
            titlePlaceholder: 'Title Text here',
            bodyPlaceholder: 'Body Text here' ,
            title: null,
            body: null,
            imageUrl: null,
        }
    }
    render() {
        
        const { handleSubmit, formTitle, newsletterToEdit, titlePlaceholder, bodyPlaceholder } = this.props;
        
        if(newsletterToEdit) {
            var title = newsletterToEdit.title;
            var body = newsletterToEdit.body;
            var imageUrl = newsletterToEdit.imageUrl;
        }

        return (
        <form onSubmit={handleSubmit} className="input-form">
            <FormTitle className="input-form__title" text={formTitle} />
            <Field
                className="input-form__newsletter-title"
                placeholder={titlePlaceholder ? titlePlaceholder : this.default.titlePlaceholder}
                name="title"
                type="text"
                title="Newsletter Title"
                component={FormInput}
                editValue={title ? title : this.default.title}
            />  
            <Field
                className="input-form__body"
                placeholder={bodyPlaceholder ? bodyPlaceholder : this.default.bodyPlaceholder}
                name="body"
                type="text"
                title="Body"
                component={FormTextArea}
                editValue={body ? body : this.default.body}
            />
            <Field
                className="input-form__submit"
                small={true}
                danger={true}
                name="submit"
                type="submit"
                title="Submit"
                component={FormButton}
            />  
            <Field
                className="input-form__cancel"
                small={true}
                name="cancel"
                type="button"
                title="Cancel"
                component={FormButton}
                onClick={this.props.onCancel}
            />  
            <Field
                className="input-form__image"
                small={true}
                name="image"
                type="file"
                title="Image"
                component={FormImage}
                imageUrl={imageUrl}
            />  


        </form>
        );
    }
}

InputForm = reduxForm({
  form: "newnewsletter"
})(InputForm);

export default InputForm;
