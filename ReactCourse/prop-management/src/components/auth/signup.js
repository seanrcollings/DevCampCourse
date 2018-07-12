import React, { Component } from 'react';
import * as actions from '../../actions'
import { connect } from 'react-redux'

import SignUpForm from './signupForm';


class SignUp extends Component {

    onSubmit = (fields) => {
        this.props.signUp(fields, () => {
            console.log('navigate to dashboard')
        })
    }
    render() {
         return (
            <div className = 'sign-up'>
               <SignUpForm onSubmit={ (event) => this.onSubmit(event)} /> 
            </div>
         )
    }
}

export default connect(null, actions)(SignUp);