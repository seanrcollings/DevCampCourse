import React from 'react';

const ChangeDate = (title, callback) => {
    return (
        <div className = 'change-date-wrapper'>
            <button className = 'change-date' onClick = {callback}><i className="far fa-calendar-alt"></i>{title}</button>
        </div>
    )
}

export default ChangeDate;