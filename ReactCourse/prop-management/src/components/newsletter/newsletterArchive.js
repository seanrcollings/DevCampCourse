import React, { Component } from 'react';

export function ArchiveItem(props){
    return (
        <div className = 'archive-item archive-items__item'>
            <div className = 'archive-item__title'>{props.title}</div>
            <div className = 'archive-item__date'>{props.date}</div>
        </div>
    )
} 

class NewsletterArchive extends Component {
    render() {
        return (
            <div className = 'newsletter-archive'>
                <div className = 'newsletter-archive__title'>{this.props.title}</div>
                <div className = 'newsletter-archive__items archive-items'>
                    <ArchiveItem title = 'hey' date = 'hi buddy'/>
                </div>
            </div>
        )
    }
}

export default NewsletterArchive;
