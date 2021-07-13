import React from 'react';
import './style.css';

export class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.className = "component-Countdown"
    }

    componentDidMount() {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        let refreshDate = "Jun 18, 2021 17:00:00",
            countDown = new Date(refreshDate).getTime(),
            x = setInterval(function () {

                let now = new Date().getTime();
                let distance = countDown - now;

                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

                //do something later when date is reached
                if (distance < 0) {
                    let headline = document.getElementById("headline"),
                        countdown = document.getElementById("countdown");

                    //code pour reload la page et tout les components
                    headline.innerText = "Refreshed";
                    countdown.style.display = "none";

                    clearInterval(x);
                }
                //seconds
            }, 0)
    }

    render() {
        return (
            <div className={`${this.className} ${this.props.className}`}>
                <div className={`${this.className}-container`}>
                    <h1 className={`${this.className}-title`} id="headline">Mise a jour du Site dans:</h1>
                    <div className={`${this.className}-countdown`} id="countdown">
                        <ul>
                            <li className={`${this.className}-li ${this.className}-li-hours`}><span id="hours"></span>Heures</li>
                            <li className={`${this.className}-li ${this.className}-li-minutes`}><span id="minutes"></span>Minutes</li>
                            <li className={`${this.className}-li ${this.className}-li-seconds`}><span id="seconds"></span>Secondes</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}