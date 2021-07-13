import React from 'react';
import Cookie from 'universal-cookie';
import VaccinLogo from '../../img/vaccin.png';
import HelpLogo from '../../img/help.webp';
import { ScrollProgressBar, NavBar, Loading, ChartContainer, Stats, Footer, Map, Countdown, Button } from '../../components';
import './style.css';

export class Main extends React.Component {

    constructor(props) {
        super(props);
        this.cookie = new Cookie();
        this.className = "page-Main"
        this.state = {
            loading: false,
        }
    } 

    render() {
        return !this.state.loading?  (
            <div className={this.className}>
                {[<ScrollProgressBar key="page-Main-ScrollProgressBar"/>, <NavBar key="page-Main-NavBar"/>, <Countdown className="page-Main-home-countdown" key="page-Main-Countdown"/>]}
                    
                {/* Home */}
                <div className="page-Main-home" id="home">
                    <div className="page-Main-home-charts">
                        <ChartContainer className="page-Main-home-chart" title="Contaminations" desc="Nous remarquons une légere hausse (+54) desc contaminations aujourdhui"/>
                        <ChartContainer className="page-Main-home-chart" title="Guérison" desc="Une grosse hausse des Guérison (+102) aujourdhui"/>
                        <ChartContainer className="page-Main-home-chart" title="Morts" desc="Le nombres de morts par jour reste stable pour le moments"/>
                    </div>
                </div>

                {/* Stats */}
                <div className="page-Main-stats" id="stats">
                    <Stats className="page-Main-stats-stat"/>
                </div>
                
                {/* Map */}
                <div className="page-Main-map" id="map">
                    <Map className="page-Main-map-map"/>
                </div>

                {/* Vaccin */}
                <div className="page-Main-vaccin" id="vaccin">
                   <div className="page-Main-vaccin-cotaniner">
                        <img className="page-Main-vaccin-img" src={VaccinLogo} alt="page-Main-vaccin-img"/>
                        <div className="page-Main-vaccin-informations">
                            <div className="page-Main-vaccin-text">Si vous shouaiter vous faire vacciner il est possible de faire cela en vous rendons sur le site du gouverneemnts <span className="markdown-link-red">santer.gov.dz</span> et de vous inscrire, ensuite vous devrer patienter quelque temps avant d'avoir un rendez vous</div>
                            <Button className="page-Main-vaccin-button" text="Me Faire Vacciner" color="#eb5569"/>
                        </div>
                   </div>
                </div>
                
                {/* Aide */}
                <div className="page-Main-aide" id="aide">
                    <div className="page-Main-aide-cotaniner">
                        <img className="page-Main-aide-img" src={HelpLogo} alt="page-Main-aide-img"/>
                        <div className="page-Main-aide-text">Les défis majeurs que pose la pandémie de Covid-19 mettent à rude épreuve notre détermination collective. Cela a commencé avec des restrictions de voyage. <span className="markdown-link-red">covidtracker.ga/help</span> Aujourd’hui, les pays imposent l’un après l’autre des mesures de distanciation sociale. Si ces actions sont cruciales pour arrêter la pandémie.</div>
                        <Button className="page-Main-aide-button" text="M'Aider / Aider" color="#e40316"/>
                    </div>
                </div>

                <Footer className="page-Main-footer" copyright="Covid Tracker"/>
            </div>
        ) : <Loading desc="Your page is Loading, please wait"/>
    }
}