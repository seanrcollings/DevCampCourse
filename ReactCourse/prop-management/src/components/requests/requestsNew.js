import React, { Component } from 'react';

import { connect } from 'react-redux'
import * as actions from '../../actions'

import InputForm from '../inputForm';

class NewRequest extends Component {

    onSubmit = (fields) => {
        const { title, body, image } = fields;
        const formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        formData.append('image', image) 

        console.log(formData)
        this.props.createNewRequest(this.props._id, formData, () => {
            this.props.history.push('/dashboard')
        })
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