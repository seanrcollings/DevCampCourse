import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class ClearEnrollmentButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.clearAll}>Clear All Enrollments</button>
      </div>
    )
  }
}

export default connect(null, actions)(ClearEnrollmentButton);
