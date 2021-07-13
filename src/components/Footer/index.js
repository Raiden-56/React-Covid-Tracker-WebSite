import React from 'react';
import './style.css';

export function Footer({ className, copyright }) {
    
    return (
        <div className={`component-Footer ${className}`}>
            <div className="component-Footer-item component-Footer-title">CovidTracker</div>
            <span className="component-Footer-item component-Footer-copyright">© Copyright 2021 {copyright} - All Rights Reserved</span>
            <div className="component-Footer-item component-Footer-sosciaLMedias">
                <a className="component-Footer-sosciaLMedia component-Footer-sosciaLMedia-discord" href="#">Discord</a>
                <a className="component-Footer-sosciaLMedia component-Footer-sosciaLMedia-twitter" href="#">Twitter</a>
            </div>
            <a href="#" className="component-Footer-item component-Footer-about">📌 About</a>
        </div>
    )
}