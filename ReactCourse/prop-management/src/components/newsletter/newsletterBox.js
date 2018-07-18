import React from 'react';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June","July", "Aug",
 "Sep", "Oct", "Nov", "Dec"];
 
export default function NewsletterBox(props) {
    return (
        <div className = 'newsletter-box'>
            <div className = 'newsletter-box__day'>{props.date.getDate()}</div>
            <div className = 'newsletter-box__month-year'>{monthNames[props.date.getMonth()]} {props.date.getFullYear()}</div>
            <div className = 'newsletter-box__point'></div>
        </div>
    )
}