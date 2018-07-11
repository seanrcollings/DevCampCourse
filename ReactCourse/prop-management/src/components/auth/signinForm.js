import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput } from '../formFields';



class SignInForm extends Component {
    render() {
         return (
            <form className = 'sign-in-from'>
                <FormTitle className = 'sign-in-form__title' text = 'Login'/>
                <Field className = 'sign-in-form__email' component = {FormInput} name = 'email' type = 'email' />
            </form>
         )
    }
}

SignInForm = reduxForm({
    from: 'signin'
})(SignInForm);

export default SignInForm;