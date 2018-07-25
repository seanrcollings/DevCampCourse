import React, { Component } from 'react';
import RequestsBox from './requestsBox';

class RequestBoxes extends Component {
    render() {
        return (
            <div className = 'request-boxes'>
                <RequestsBox title = 'Pending' count = {3} className = 'requests-box-active'/>
                <RequestsBox title = 'In Progress' count = {1} className = 'requests-box-inactive'/>
                <RequestsBox title = 'Completed' count = {0}/>
            </div>
        )
    }
}

export default RequestBoxes