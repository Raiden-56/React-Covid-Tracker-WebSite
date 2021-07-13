import React from 'react';
import './style.css';

export class Loading extends React.Component {
    constructor(props) {
        super(props)
        this.className = "component-Loading"
    }
    
    render() {
        return (
            <div className={`${this.className} ${this.props.className}`}>
                <div className={`${this.className}-texts`}>
                    <div className={`${this.className}-texts-title`}>Loading</div>
                    <div className={`${this.className}-texts-desc`}>{this.props.desc}</div>
                </div>
                <div className={`${this.className}-loading`} />
            </div>
        )
    }
}