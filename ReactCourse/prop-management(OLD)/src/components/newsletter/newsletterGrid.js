import React, { Component } from 'react';

import NewsletterBox from './newsletterBox'
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';
import Button from '../button';

export default class NewsletterGrid extends Component {

    handleAddNewsletter = () => {
        this.props.history.push('/newsletter/new')
    }
    render() {
        const latest = {
            _id: '213',
            title: 'Happy Holidays Fan',
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida egestas nisi, in pharetra augue. Aenean hendrerit nunc nibh, a eleifend lectus tristique commodo. Sed ornare ultrices metus, in mattis lectus mollis at. Duis maximus risus vel gravida posuere. Duis in tellus eu leo tempor volutpat at gravida sapien. Mauris dictum scelerisque ex a efficitur. Nunc tempor gravida pharetra. Etiam semper sagittis elit, id varius lacus. In nec lacinia libero, non vulputate urna. Etiam et faucibus erat. Vivamus tincidunt dolor nisi, quis sagittis lectus ultrices non. Vivamus placerat sed enim ac pellentesque. Curabitur vestibulum, magna a tempor congue, neque augue posuere diam, semper interdum nisi lorem quis felis. Nunc tellus ante, lacinia vel elementum eget, pharetra et nisl. Donec hendrerit tempor mauris, at fermentum mi lobortis eget. Aliquam mollis pulvinar mi, non rutrum nibh consectetur vitae. Proin porttitor leo non egestas semper. Duis venenatis molestie ipsum, vitae gravida enim. Aliquam erat volutpat. Donec in massa vitae urna porttitor ornare. Pellentesque suscipit augue in justo euismod, nec dictum enim pulvinar. Donec feugiat nulla nisi. Nunc pretium tristique laoreet. Cras vulputate sem a nisi feugiat maximus. Integer pulvinar dui non facilisis volutpat. Proin tempus suscipit augue vitae tristique.",
            date: new Date(),
            imageUrl: 'http://via.placeholder.com/950x258'
        }
         return (
            <div className = 'newsletter-grid'>
                <Button className = 'newsletter-grid__button' icon='fas fa-plus' callback={() => this.handleAddNewsletter()}/>
                <NewsletterBox date = {new Date()}/>
                <NewsletterArchive title = 'Archive'/>
                <NewsletterLatest history = {this.props.history} {...latest}/>
            </div>
         )
    }
}