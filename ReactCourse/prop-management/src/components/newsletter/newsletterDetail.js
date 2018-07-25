import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import NewsletterBox from './newsletterBox';
import NewsletterLatest from './newsletterLatest';

import { FormTitle } from '../formTitle'
import history from '../../history'

class NewlsetterDetail extends Component {

    componentDidMount() {
        this.props.fetchNewsletterWithId(this.props.match.params.id);
    }

    handleClick() {
        history.push('/dashboard')
    }
    
    render() {
         return (
            <div className = 'newsletter-detail'>
                <FormTitle className = 'newsletter-detail__title' text = 'Newsletter Detail'/>
                <NewsletterBox {...this.props.newsletterToEdit}/>
                <NewsletterLatest { ...this.props.newsletterToEdit } />
                <button className = 'newsletter-detail__cancel' onClick = {() => this.handleClick()}>Go Back</button>
            </div>
         )
    }
}

function mapStateToProps(state) {
    const { newsletterToEdit } = state.newsletters 
    return { newsletterToEdit };
}

export default connect(mapStateToProps, actions)(NewlsetterDetail)