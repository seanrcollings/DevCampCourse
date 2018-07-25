import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actions from '../../actions'
import InputForm from '../inputForm';

class EditNewsletter extends Component {

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

    componentDidMount() {
        this.props.fetchNewsletterWithId(this.props.match.params.id)
    }

    render() {
        return (
            <div className='new-newsletter'>
                <InputForm 
                newsletterToEdit={this.props.newsletterToEdit}
                onCancel={() => this.onCancel()}
                onSubmit={(event) => this.onSubmit(event)}
                formTitle = 'Edit Newsletter'
                 />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { newsletterToEdit } = state.newsletters;
    return {
        newsletterToEdit
    }
}

export default connect(mapStateToProps, actions)(EditNewsletter);