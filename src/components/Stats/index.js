import React from 'react';
import './style.css';

export class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.className = "component-Stats"
    }

    render() {
        return (
            <div className={`${this.className} ${this.props.className}`}>
                <div className={`${this.className}-title`}>Get All the Stats here</div>
                <div className={`${this.className}-box`}>
                    <div className={`${this.className}-box-header`}>
                        <div className={`${this.className}-box-header-title`}>--</div>
                        <select className={`${this.className}-box-header-selector`}>
                            <option>Mardi 15 Juin</option>
                            <option>Mercredi 16 Juin</option>
                            <option>Jeudi 17 Juin</option>
                            <option>Vendredi 18 Juin</option>
                            <option>Samedi 19 Juin</option>
                            <option>Dimanche 20 Juin</option>
                        </select>
                    </div>
                    <div className={`${this.className}-elements`}>
                        <div className={`${this.className}-element`}>
                            <div className={`${this.className}-element-texts`}>
                                <div className={`${this.className}-number`}><span>⬇️</span>25</div>
                                <div className={`${this.className}-text`} style={{ color: "orange" }}>Contaminations</div>
                            </div>
                        </div>
                        <div className={`${this.className}-element`}>
                            <div className={`${this.className}-element-texts`}>
                                <div className={`${this.className}-number`}><span>⬇️</span>25</div>
                                <div className={`${this.className}-text`} style={{ color: "green" }}>Guérison</div>
                            </div>
                        </div>
                        <div className={`${this.className}-element`}>
                            <div className={`${this.className}-element-texts`}>
                                <div className={`${this.className}-number`}><span>⬆️</span>25</div>
                                <div className={`${this.className}-text`} style={{ color: "red" }}>Morts</div>
                            </div>
                        </div>
                        <div className={`${this.className}-element`}>
                            <div className={`${this.className}-element-texts`}>
                                <div className={`${this.className}-number`}><span>⬇️</span>25</div>
                                <div className={`${this.className}-text`} style={{ color: "yellow" }}>Hospitalisation</div>
                            </div>
                        </div>
                        <div className={`${this.className}-element`}>
                            <div className={`${this.className}-element-texts`}>
                                <div className={`${this.className}-element-texts-number`}><span>⬆️</span>25</div>
                                <div className={`${this.className}-element-texts-text`} style={{ color: "red" }}>Réanimation</div>
                            </div>
                        </div>
                        <div className={`${this.className}-element`}>
                            <div className={`${this.className}-element-texts`}>
                                <div className={`${this.className}-number`}><span>⬆️</span>25</div>
                                <div className={`${this.className}-text`} style={{ color: "green" }}>Vaccination</div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        )
    }
}