import React, { Component } from 'react';
import { connect } from 'react-redux';

import RequestsBox from './requestsBox';

class RequestBoxes extends Component {
    render() {
        return (
            <div className = 'request-boxes'>
                <RequestsBox title = 'Pending' type = 'pending' count = {this.props.pendingCount} className = 'requests-box-active'/>
                <RequestsBox title = 'In-Progress' type = 'in-progress' count = {this.props.progressCount} className = 'requests-box-inactive'/>
                <RequestsBox title = 'Completed' type = 'completed' count = {this.props.completedCount}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { requests } = state.requests;
    var pendingCount = 0;
    var progressCount =0;
    var completedCount = 0;

    requests.map(request => {
        if(request.status === 'pending') {
            pendingCount++;
        } else if(request.status === 'progress') {
            progressCount++;
        } else {
            completedCount++;
        }
    })
    return {
        pendingCount,
        progressCount,
        completedCount
    }
}

export default connect(mapStateToProps)(RequestBoxes)