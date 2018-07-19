import React from 'react';


function Button({className, callback, text, icon}) {
    if(icon) {
        return (
            <a onClick={callback} className={`${className} button`}>
                <i className={icon}></i>
            </a>
        )
    } 
}

export default Button;