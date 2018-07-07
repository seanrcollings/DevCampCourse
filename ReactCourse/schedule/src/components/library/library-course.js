import React, { Component } from 'react';
import Icon from '../icon';
import Arrow from './arrow';
import Action from '../action';

class LibraryCourse extends Component {
    render() {
         return (
            <div className = 'library-course'>
                <div className = 'library-course__title-check'>
                    <label className = 'library-course__title'>Problem Solving</label>
                    { Icon('fas fa-check', 'library-course__check') }
                </div>
                <Arrow className = 'library-course__arrow'/>
                <Action className = 'library-course__action'/>
                <div className = 'library-course__description'>
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Sed vitae magna nec eros porta molestie vitae
                        vitae augue. Mauris hendrerit gravida justo nec placerat.
                        Aenean ultricies turpis mi, quis tempus ligula ornare non.
                        Praesent augue lectus, posuere tincidunt vulputate in, egestas
                        in urna. Fusce ultrices magna quis elit pulvinar congue. Sed
                        in ornare libero, nec volutpat enim. Cras auctor venenatis mi ut 
                        lacinia.</p>
                </div>
            </div>
         )
    }
}

export default LibraryCourse;