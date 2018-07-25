import React, { Component } from 'react';

import InputForm from '../inputForm';

class NewNewsletter extends Component {

    onSubmit = (fields) => {

        // if(button == 'submit') {
        //   // save new newsletter on the backend. perform a post request here.
        //   console.log('trying to submit to backend.');
        // } 
        // this.props.history.push('/dashboard')
        console.log('trying to submit');
    }

    onCancel = () => {
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <div className='new-newsletter'>
                <InputForm 
                onCancel={() => this.onCancel()} 
                onSubmit={(event) => this.onSubmit(event)}
                formTitle = 'New Newsletter'
                titlePlaceholder = 'Newsletter Title'
                bodyPlaceholder = 'Newsletter Body'
                />
            </div>
        )
    }
}

export default NewNewsletter;