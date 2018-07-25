import React, { Component } from 'react';

import { connect } from 'react-redux'
import * as actions from '../../actions'

import InputForm from '../inputForm';

class NewRequest extends Component {

    onSubmit = (fields) => {
        this.props.createNewRequest(this.props._id, fields, () => {
            this.props.history.push('/dashboard')
        })
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
            <div className='new-request'>
                <InputForm
                onCancel={() => this.onCancel()} 
                onSubmit={(event) => this.onSubmit(event)}
                formTitle = 'New Request'
                titlePlaceholder = 'New Request Title'
                bodyPlaceholder = 'New Request Body'
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { _id } = state.auth.user;
    return { _id }
}
export default connect(mapStateToProps, actions)(NewRequest);