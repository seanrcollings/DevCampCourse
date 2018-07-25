import React, { Component } from 'react';


export class FormInput extends Component {
    render() {
        const { className, title, input, type, placeholder, editValue } = this.props;
        return (
            <div className={`${className} form-input`}>
                <label className='form-input__title'>{title}</label>
                <input
                    className='form-input__input'
                    type={type}
                    {...input}
                    placeholder={placeholder}   
                    value={editValue ? editValue : input.value} 
                />
            </div>
        )
    }
}

export class FormTextArea extends Component {
    render() {
        const { className, title, input, type, placeholder, editValue } = this.props;
        return (
            <div className={`${className} form-textarea`}>
                <label className='form-textarea__title'>{title}</label>
                <textarea
                    className='form-textarea__input'
                    type={type}
                    {...input}
                    placeholder={placeholder} 
                    value={editValue ? editValue : input.value}
                >
                
                </textarea>
            </div>
        )
    }
}


export class FormButton extends Component {
    render() {
        const { className, title, input, type, small, danger, onClick } = this.props;
        return (
            <div className={`${className} ${small ? 'form-button-small' : 'form-button'}`}>
                <button
                    className={`
                        ${small ? 'form-button-small' : 'form-button'}__button 
                        ${danger ? 'form-button-small__danger' : ''}
                    `}
                    type={type}
                    {...input} 
                    onClick={onClick}
                >
                {title}
                </button>
            </div>
        )
    }
}

export class FormImage extends Component {
    render() {
        const { className, title, input, imageUrl } = this.props;
        return (
            <div className={`${className} form-image`}>
                <label className='form-image__title'>{title}</label>
                <img
                    className='form-image__image'
                    src={imageUrl} 
                />
                <input
                    className='form-image__replace'
                    type='button'
                    // id=''
                    value='Replace'
                    onClick={
                        () => document.getElementById('file') ? document.getElementById('file').click() : ''
                    }
                />
                <input {...input} 
                        type='file'
                        style={{display: 'none'}}
                        id='file'
                        name='file'
                        accepts='image/*'
                        value={undefined}
                        />
                {/* replace button/input goes here */}
            </div>
        )
    }
}
