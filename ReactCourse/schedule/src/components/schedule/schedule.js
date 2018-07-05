import React, { Component } from 'react';
import Gradient from '../gradient';

class Schedule extends Component {
    render() {
         return (
            <div className = 'schedule'>
                <h1 className = 'scheduleTitle'>My Schedule</h1>
                <Gradient />
            </div>
         )
    }
}

export default Schedule;