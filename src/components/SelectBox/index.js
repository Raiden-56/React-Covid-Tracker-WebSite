import React from 'react';
import './style.css';

export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.className = "component-Button"
    }

    render() {
        return (
            <a className={`${this.className} ${this.props.className}`} href="#">Me Faire Vacciner</a>
        )
    }
}