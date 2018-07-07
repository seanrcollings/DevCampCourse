import React, { Component } from 'react';
import Icon from './icon';

class Action extends Component {
    render() {
         return (
            <div className = {`${this.props.className}`}>
                { Icon('fas fa-plus-circle', 'action')}
                {/* fas fa-times-circle */}
            </div>
         )
    }
}

export default Action;