import React from 'react';
import { Svg } from '../Svg'
import './style.css';

export class Map extends React.Component {
    constructor(props) {
        super(props);
        this.cn = "component-Map"
        this.state = {
            contaminations: 312,
            reanimations: 25,
            morts: 12,
            gairisons: 42,
            country: "Alger",
            defaultCountry: {
                name: "Alger",
                id: "DZA2195",
            },
        }
        this.countries = [
            "DZA2143",
            "DZA2144",
            "DZA2145",
            "DZA2146",
            "DZA2147",
            "DZA2148",
            "DZA2149",
            "DZA2150",
            "DZA2163",
            "DZA2164",
            "DZA2165",
            "DZA2166",
            "DZA2188",
            "DZA2189",
            "DZA2190",
            "DZA2191",
            "DZA2192",
            "DZA2193",
            "DZA2194",
            "DZA2195",
            "DZA2196",
            "DZA2197",
            "DZA2198",
            "DZA2199",
            "DZA2200",
            "DZA2201",
            "DZA2202",
            "DZA2203",
            "DZA2204",
            "DZA2205",
            "DZA2206",
            "DZA2207",
            "DZA2208",
            "DZA2209",
            "DZA2210",
            "DZA2211",
            "DZA2212",
            "DZA2213",
            "DZA2214",
            "DZA2215",
            "DZA2216",
            "DZA2217",
            "DZA2218",
            "DZA2219",
            "DZA2220",
            "DZA2221",
            "DZA2222",
            "DZA2223",
        ]
    }

    componentDidMount() {
        this.countries = this.countries.map((c) => document.getElementById(c));
        this.countries.forEach((c) => {
            c.addEventListener("mouseover", () => {
                document.getElementById(this.state.defaultCountry.id).attributes[2].value = null;
                this.handleHover(c.attributes[3].value, c.attributes[1].value)
            });
            c.addEventListener("mouseleave", () => {
                document.getElementById(this.state.defaultCountry.id).attributes[2].value = "active";
                this.handleHover(this.state.defaultCountry.name)
            });
            c.addEventListener("click", () => {
                document.getElementById(this.state.defaultCountry.id).attributes[2].value = null;
                this.setState({ defaultCountry: { name: c.attributes[3].value, id: c.attributes[1].value } })
                c.attributes[2].value = "active"
            })
        })
    }

    handleHover(name, id) {
        this.setState({ country: name })
    }

    render() {
        return (
            <div className={`${this.cn} ${this.props.className}`}>
                <div className={`${this.cn}-cotainer`}>
                    <div className={`${this.cn}-title`}>Country Stats</div>
                    <div className={`${this.cn}-map`}>
                        <Svg />
                    </div>
                    <div className={`${this.cn}-stats`}>
                        <div className={`${this.cn}-country`}>{this.state.country}</div>
                        <div className={`${this.cn}-texts`}>
                            <div className={`${this.cn}-text-container`}>
                                <h1 className={`${this.cn}-text`}>{this.state.contaminations}</h1>
                                <h1 className={`${this.cn}-text`}>Contaminations</h1>
                            </div>
                            <div className={`${this.cn}-text-container`}>
                                <h1 className={`${this.cn}-text`}>{this.state.reanimations}</h1>
                                <h1 className={`${this.cn}-text`}>Reanimations</h1>
                            </div>
                            <div className={`${this.cn}-text-container`}>
                                <h1 className={`${this.cn}-text`}>{this.state.morts}</h1>
                                <h1 className={`${this.cn}-text`}>Morts</h1>
                            </div>
                            <div className={`${this.cn}-text-container`}>
                                <h1 className={`${this.cn}-text`}>{this.state.gairisons}</h1>
                                <h1 className={`${this.cn}-text`}>Guérison</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}