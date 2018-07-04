import React from 'react';

const ChangeDate = (title, callback) => {
    return (
        <button className = 'change-date' onClick = {callback}>{title}</button>
    )
}

export default ChangeDate;