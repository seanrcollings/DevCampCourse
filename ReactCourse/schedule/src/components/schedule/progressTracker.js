import React, { Component } from 'react'

export default class ProgressTracker extends Component {
  
  calculateProgress = function() {
    return ((this.props.amountEnrolled / this.props.amountPossible) * 100)
  }.bind(this);
  
  render() {
    return (
      <div className = 'progress-tracker'>
        <label className = 'Progress-tracker__label'>Progress Tracker</label>
        <div className = 'progress-tracker__percentage'>
            {this.calculateProgress()}%
        </div>
      </div>
    )
  }
}
