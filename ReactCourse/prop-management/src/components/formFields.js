import React, { Component } from 'react';


export class FormInput extends Component {
    render() {
        const { className, title, input, type, placeholder } = this.props
        return (
            <div className = {`${className} form-input`}>
                <div className = 'form-input__title'>{title}</div>
                <input 
                    className = 'form-input__input'
                    type = {type}
                    {...input}
                    placeholder = {placeholder}
                />
            </div>
        )
    }
}


export class FormButton extends Component {
    render() {
        const { className, title, input, type} = this.props
        return (
            <div className = {`${className} form-button`}>
                <button 
                    className= 'form-button__button'
                    type = {type}
                    {...input}
                >
                    {title}
                </button>
            </div>
        )
    }
}



