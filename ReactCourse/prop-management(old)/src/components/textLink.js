import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class TextLink extends Component {
    render() {
        const { to, text } = this.props;
         return (
            <Link to = {to} className = 'text-link'>
                {text} 
            </Link>
         )
    }
}