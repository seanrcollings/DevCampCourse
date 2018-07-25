import React, { Component } from 'react';

import Icon from '../icon';
import Button from '../button';
import ROOT_URL from '../../config'

import AnimateHeight from 'react-animate-height';

class RequestsItem extends Component {

    constructor() {
        super() 

        this.state = {
            height: 0
        }
    }

    toggleDropdown = (_id) => {
        var element = document.getElementById(_id);
        if(this.state.height === 0) {
            this.setState({height: 'auto'})
            element.classList.add('bg-F8')
        } else {
            element.classList.remove('bg-F8')
            this.setState({height: 0})
        }
    }
    render() {
        const {_id, title, body, date, imageUrl} = this.props;
        const parsedDate = new Date(date);

        return (
            <div id = {_id} className = 'requests-item'>
                
                <Icon className = 'requests-item__icon'
                  icon='fas fa-exclamation-triangle'
                />
                
                <div className = 'requests-item__title'>
                    <div className = 'requests-item__title__text'>{title}</div>
                    <Icon callback = {() => this.toggleDropdown(_id)} className = 'requests-item__title__arrow' icon = 'fas fa-sort-down'/>
                </div>
                
                <div className = 'requests-item__tenant-unit'>
                    Sean - Unit 121
                </div>
                
                <div className = 'requests-item__date'>
                    { parsedDate.getMonth() + 1 }
                    /
                    { parsedDate.getDate() }
                    /
                    { parsedDate.getFullYear() - 2000 } 
                </div>
                
                <Button className = 'requests-item__move'
                  callback={() => console.log('Trying to move request item')}
                  icon ='fas fa-wrench'
                />
                
                <div className = 'requests-item__description'>
                    <AnimateHeight duration = {300} height ={this.state.height}>
                        <div className = 'requests-item__description'>
                            <img className = 'requests-item__description-image' src = {`${ROOT_URL}/${imageUrl}`}/>
                            <p className = 'requests-item__description-text'>{body}</p>
                        </div>
                     </AnimateHeight>
                </div>
            </div>
        )
    }
}

export default RequestsItem;