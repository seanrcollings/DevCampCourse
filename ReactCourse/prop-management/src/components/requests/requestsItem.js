import React, { Component } from 'react';

import Icon from '../icon';
import Button from '../button';

import AnimateHeight from 'react-animate-height';

class RequestsItem extends Component {

    constructor() {
        super() 

        this.state = {
            height: 0
        }
    }

    toggleDropdown = () => {
        var element = document.getElementById('requests-item');
        if(this.state.height === 0) {
            this.setState({height: 'auto'})
            element.classList.add('bg-F8')
        } else {
            element.classList.remove('bg-F8')
            this.setState({height: 0})
        }
    }
    render() {
        return (
            <div id = 'requests-item' className = 'requests-item'>
                
                <Icon className = 'requests-item__icon'
                  icon='fas fa-exclamation-triangle'
                />
                
                <div className = 'requests-item__title'>
                    <div className = 'requests-item__title__text'>My door fell down dog</div>
                    <Icon callback = {() => this.toggleDropdown()} className = 'requests-item__title__arrow' icon = 'fas fa-sort-down'/>
                </div>
                
                <div className = 'requests-item__tenant-unit'>
                    Sean - Unit 121
                </div>
                
                <div className = 'requests-item__date'>
                    2/21/12
                </div>
                
                <Button className = 'requests-item__move'
                  callback={() => console.log('Trying to move request item')}
                  icon ='fas fa-wrench'
                />
                
                <div className = 'requests-item__description'>
                    <AnimateHeight duration = {300} height ={this.state.height}>
                        <div className = 'requests-item__description'>
                            <img className = 'requests-item__description-image' src = 'http://via.placeholder.com/160x94'/>
                            <p className = 'requests-item__description-text'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum</p>
                        </div>
                     </AnimateHeight>
                </div>
            </div>
        )
    }
}

export default RequestsItem;