import React, { Component } from 'react';

class Action extends Component {
    render() {
         return (
            <div className = {`${this.props.className} arrow`}>
                +
            </div>
         )
    }
}

export default Action;