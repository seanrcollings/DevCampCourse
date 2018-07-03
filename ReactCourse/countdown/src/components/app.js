import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';

export default class App extends Component {
  render() {
    return (
      <div className = 'grid'>
        <h1 className = 'grid__title'>Birthday Countdown</h1>
        <div className = 'grid__skew-dark-one-box'></div>
        <div className = 'grid__skew-dark-two'></div>

        <div className = 'grid__skew-light-one'></div>
        <div className = 'grid__skew-light-two'></div>
        <div className = 'grid__skew-light-three-box'></div>

        <Picker />
        {Button('Generate Countdown')}    
        <Clock />
      </div>
    );
  }
}
