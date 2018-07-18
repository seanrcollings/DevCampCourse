import React, { Component } from 'react';

import NewsletterBox from './newsletterBox'
import NewsletterArchive from './newsletterArchive';

export default class NewsletterGrid extends Component {
    render() {
         return (
            <div className = 'newsletter-grid'>
                <NewsletterBox date = {new Date()}/>
                <NewsletterArchive title = 'Archive'/>
            </div>
         )
    }
}