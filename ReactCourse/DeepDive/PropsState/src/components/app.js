import React, { Component } from 'react';
import JournalList from './journals/journal_lists';

export default class App extends Component {
  render() {
    return (
      <div>
		<h1>Devcamp Deep Dive into State, Props and this</h1>
    <JournalList heading = 'List 1'/>
      </div>
    );
  }
}
	
