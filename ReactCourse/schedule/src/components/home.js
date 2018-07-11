import React, { Component } from 'react';
import Library from './library/library';
import Schedule from './schedule/schedule';
import ClearEnrollmentButton from './clearEnrolementsButton';


class Home extends Component {
  render() {
    return (
      <div className = 'home'>
        <Library />
        <ClearEnrollmentButton />
        <Schedule />
      </div>
    );
  }
}

export default Home;