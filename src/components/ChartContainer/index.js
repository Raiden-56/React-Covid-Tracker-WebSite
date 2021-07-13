import React from 'react';
import { Bar } from 'react-chartjs-2';
import './style.css';

export class ChartContainer extends React.Component {
    constructor(props) {
        super(props);
        this.className = "component-ChartContainer"
    }

    render() {
        return (
            <div className={`${this.className} ${this.props.className}`}>
                <div className={`${this.className}-title`}>{this.props.title}</div>
                <div className={`${this.className}-box`}>
                    <Bar 
                        data={{
                            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                            datasets: [{
                                label: "Nouvelle Containations",
                                data: [50, 99, 85, 20, 15, 4],
                                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                borderColor: 'rgba(54, 162, 235, 1)',
                                borderWidth: 1
                            }]
                        }}
                        width={"100%"}
                        height={"100%"}
                        options={{
                            animations: {
                              tension: {
                                duration: 1000,
                                easing: 'linear',
                                from: 1,
                                to: 0,
                                loop: false
                              }
                            },
                            interface: {
                                gridLine: {
                                    display: false
                                }
                            },
                            scales: {
                                y: {
                                    min: 0,
                                    max: 100,
                                    grid: {
                                        display: false,
                                    },
                                },
                                x: {
                                    grid: {
                                        display: false,
                                    }
                                },
                            },
                            layout: {
                                padding: 10
                            },
                            maintainAspectRatio: false
                          }}
                    />
                </div>
                <div className={`${this.className}-desc`}>{this.props.desc}</div>
            </div>
        )
    }
}