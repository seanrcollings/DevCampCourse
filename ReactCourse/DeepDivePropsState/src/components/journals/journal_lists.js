import React, { Component } from 'react'

const rawJournalData = [
  { title: 'Post One', content: 'Post Content', status: 'draft'},
  { title: 'Post Two', content: 'Post Content', status: 'published'},
  { title: 'Post Three', content: 'Post Content', status: 'draft'},
  { title: 'Post Four', content: 'Post Content', status: 'published'},
];


export default class JournalList extends Component {
  constructor(props) {
    super();
    
    this.state = {
      journalData: rawJournalData,
      greeting: "Hi There",
      isOpen: true
    };
  }

  render() {
    return (
      <div>
        <h1>{this.props.heading}</h1>
        {this.state.greeting}
      </div>
    );
  }
}
