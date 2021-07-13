import React from 'react';
import Logo from '../../img/virus.png'
import './style.css';

export class Page404 extends React.Component {

    constructor(props) {
        super(props);
        this.className = "Page404"
    } 

    render() {
        return (
            <div className={`${this.className}`} >
                <div className={`${this.className}-container`} >
                    <a className={`${this.className}-text`} href="/">Oups, we have a small problem</a>
                    <img alt={`${this.className}-logo`} className={`${this.className}-logo`} src={Logo} />
                </div>
            </div>
        );
    }
}