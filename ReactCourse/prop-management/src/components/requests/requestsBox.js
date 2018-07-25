import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actions from '../../actions'

class RequestsBox extends Component {
    render() {
        const { date } = this.props;
        const { count, title} = this.props;
        return (
            <a onClick = {() => this.props.changeSelectedRequestType(title)} className={`requests-box ${this.props.selectedRequestType === title ? 'requests-box-active' : 'requests-box-inactive'}`}>
                <div className='requests-box__count'>{count}</div>
                <div className='requests-box__title'>{title}</div>
                <div className='requests-box__point'></div>
            </a>
        )
    } 
}

function mapStateToProps(state) {
    const { selectedRequestType } = state.requests;
    return { selectedRequestType }
}

export default connect(mapStateToProps, actions)(RequestsBox)