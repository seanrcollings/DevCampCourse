import React, { Component } from 'react';
import Icon from './icon';

class Action extends Component {

    constructor(props) {
        super(props)

        this.status = false;
    }

    handleAction = function() {
        this.props.onClick()
        if (!this.status){
            document.getElementById(`action-${this.props.id}`).classList.add('action-remove')
        } else {
            document.getElementById(`action-${this.props.id}`).classList.remove('action-remove')
        }
        this.status = !this.status;
    }.bind(this)

    render() {
         return (
            <a id = {`action-${this.props.id}`} 
            onClick = {() => this.handleAction() } 
            className = {`${this.props.className} action`}>
                
            </a>
        )
    }
}

export default Action;