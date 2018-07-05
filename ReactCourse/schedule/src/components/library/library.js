import React, { Component } from 'react';
import LibraryCourse from './library-course';

class Library extends Component {
    render() {
         return (
            <div className = 'library'>
                <h1 className = 'libraryTitle'>Course Library</h1>
                <LibraryCourse />
                <LibraryCourse />
                <LibraryCourse />
            </div>
         )
    }
}

export default Library;