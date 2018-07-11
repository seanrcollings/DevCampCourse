import React, { Component } from 'react';


class FormInput extends Component {
    render() {
        return (
            <div className = 'form-input'>
            <label>{this.props.title}</label>
                <input className={`${this.props.className} form-inputs`}/>
            </div>
        )
    }
}

export { FormInput };
