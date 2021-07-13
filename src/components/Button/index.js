import React from 'react';
import './style.css';

export function Button({ className, color, text }) {

    const cn = "component-Button"
    
    function handleMouseEnter(e) {
        e.target.style.color = "#202225"
        e.target.style.backgroundColor = color;
    }

    function handleMouseLeave(e) {
        e.target.style.color = color
        e.target.style.backgroundColor = "transparent";
    }

    return (
        <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${cn} ${className}`} href="#" style={{ color: color, border: `solid ${color} 5px` }}>{text}</a>
    )
}