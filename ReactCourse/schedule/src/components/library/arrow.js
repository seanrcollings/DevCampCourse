import React, { Component } from 'react';

class Arrow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            status: false
        }
    }

    toggleArrow = function() {
        if (this.state.status) {
            document.getElementById(this.props.id).classList.remove('arrow-closed')
        } else {
            document.getElementById(this.props.id).classList.add('arrow-closed')
        }
        this.props.callback(this.state.status)
        this.setState({ status: !this.state.status })
    }.bind(this);

    render() {
         return (
            <a id = {this.props.id} onClick = {() => this.toggleArrow()} className = {`${this.props.className} arrow`}></a>
         )
    }
}

export default Arrow;