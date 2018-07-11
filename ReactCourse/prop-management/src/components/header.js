import React, { Component } from 'react';

export function Header() {
    return (
        <div className = 'header'>
            <h1 className = 'header__title'>Welcome to HOA Manager!</h1>
            <p className = 'header__subtitle'>Pls log in to continue</p>
        </div>
    )
}

export function HeaderBar() {
    return (
        <div className = 'header__bar'></div>
    )
}
