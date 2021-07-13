import React from 'react';
import './style.css';

export function ScrollProgressBar() {

    document.addEventListener("scroll", myFunction);

    const [scroll, setScroll] = React.useState(0);

    function myFunction() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const scrolled = (winScroll / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
        setScroll(scrolled)
    } 

    return (
        <div className="component-ScrollProgressBar-container">
            <div className="component-ScrollProgressBar-bar" style={{width: `${scroll}%`}} id="myBar"></div>
        </div>
    )
}