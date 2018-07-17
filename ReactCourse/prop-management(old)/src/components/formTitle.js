import React from 'react';

export function FormTitle(props) {
    return (
        <h1 className={`${props.className} form-title`}>
            {props.text}
        </h1>
    )
}