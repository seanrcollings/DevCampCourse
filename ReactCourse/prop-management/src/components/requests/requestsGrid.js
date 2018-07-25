import React, { Component } from 'react';

import Button from '../button'
import RequestBoxes from './requestsBoxes'
import Requests from './requests';

 
class RequestsGrid extends Component {

    handleAddRequest = () => {
        this.props.history.push('/requests/new');
    }

    render() {
        return (
            <div className = 'requests-grid'>
                <Button className='requests-grid__button' icon='fas fa-plus' callback={() => this.handleAddRequest()}/>
                <RequestBoxes />
                <Requests />
            </div>
        )
    }
}

export default RequestsGrid;