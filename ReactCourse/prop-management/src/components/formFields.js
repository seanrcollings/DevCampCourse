import React, { Component } from 'react';


class FormInput extends Component() {
    render() {
        const {className, title, name} = this.props;
        return (
            <div className = 'form-input'>
                <input className={`${className} form-inputs`}/>
            </div>
        )
    }
}

export default FormInput;
