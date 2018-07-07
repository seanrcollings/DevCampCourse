import React, { Component } from 'react'

export default class ProgressTracker extends Component {
  render() {
    return (
      <div className = 'progress-tracker'>
        <label className = 'Progress-tracker__label'>Progress Tracker</label>
        <div className = 'progress-tracker__percentage'>
            0%
        </div>
      </div>
    )
  }
}
