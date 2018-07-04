import React, { Component } from 'react';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css'

class Picker extends Component {
    // constructor (props) {
    //     super(props)
    //     this.state = {
    //     startDate: moment()
    //     };
    //     this.handleChange = this.handleChange.bind(this);
    //   }
     
    handleChange = function(date) {
        this.props.callback(date)
    }.bind(this)

    render() {
        return (
            <div className = 'picker'>
                <DatePicker 
                    selected = {this.props.startDate}
                    onChange = {this.handleChange}
                />
            </div>
        )
    }
}

export default Picker;