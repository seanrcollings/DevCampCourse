import React, { Component } from 'react';

import NewNewsletterForm from './newsletterNewForm'

class NewsletterNew extends Component {

    onSubmit = (fields) => {
        console.log('trying to handle submit')
    }

    render() {
         return (
            <div className = 'new-newsletter'>
                <NewNewsletterForm onSubmit={(event) => this.onSubmit(event)}/>
            </div>
         )
    }
}

export default NewsletterNew;