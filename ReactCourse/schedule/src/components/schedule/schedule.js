import React, { Component } from 'react';
import Gradient from '../gradient';
import ScheduleCourse from './scheduleCourse';
import ProgressTracker from './progressTracker';

class Schedule extends Component {
    render() {
         return (
            <div className = 'schedule'>
                <h1 className = 'scheduleTitle'>My Schedule</h1>
                <ScheduleCourse title = 'thing'/>
                <ScheduleCourse title = 'thing'/>
                <ScheduleCourse title = 'thing'/>
                <ProgressTracker />
                <Gradient />
            </div>
         )
    }
}

export default Schedule;