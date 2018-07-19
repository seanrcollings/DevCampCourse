import React, { Component } from 'react';

export function ArchiveItem(props){
    return (
        <div className = 'archive-item archive-items__item'>
            <div className = 'archive-item__title'>{props.title}</div>
            <div className = 'archive-item__date'>
                { props.date.getMonth() + 1 } / { props.date.getDate() } / {props.date.getFullYear() - 2000} 
            </div>
        </div>
    )
} 

class NewsletterArchive extends Component {
    render() {
        return (
            <div className = 'newsletter-archive'>
                <div className = 'newsletter-archive__title'>{this.props.title}</div>
                <div className = 'newsletter-archive__items archive-items'>
                    <ArchiveItem title = 'Jaren is the worst amirite?' date = {new Date()}/>
                    <ArchiveItem title = 'Jaren is the worst amirite?' date = {new Date()}/>
                    <ArchiveItem title = 'Jaren is the worst amirite?' date = {new Date()}/>
                    <ArchiveItem title = 'Jaren is the worst amirite?' date = {new Date()}/>
                </div>
            </div>
        )
    }
}

export default NewsletterArchive;
