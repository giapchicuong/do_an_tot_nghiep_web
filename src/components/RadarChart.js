import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

export default function RadarChart() {

    const defaultValue = {

        series: [{
            data: [84, 8.4, 3.0, 1.9, 2.5]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 380
            },
            plotOptions: {
                bar: {
                    barHeight: '100%',
                    distributed: true,
                    horizontal: true,
                    dataLabels: {
                        position: 'bottom'
                    },
                }
            },
            colors: ['#4880FF', '#91e19b', '#8dc572', '#623ce7', '#f27474'],
            dataLabels: {
                enabled: true,
                textAnchor: 'start',
                style: {
                    colors: ['#1d1c1b']
                },
                formatter: function (val, opt) {
                    return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val + '%'
                },
                offsetX: 0,
                dropShadow: {
                    enabled: true
                }
            },
            stroke: {
                width: 1,
                colors: ['#fff']
            },
            xaxis: {
                categories: ['5 sao', '4 sao', '3 sao', '2 sao', '1 sao',]

            },
            yaxis: {
                labels: {
                    show: false
                }
            },

            tooltip: {
                theme: 'dark',
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function () {
                            return ''
                        }
                    }
                }
            }
        },


    };


    const [valueChart, setValueChart] = useState(defaultValue)

    return (
        <>
            <ReactApexChart options={valueChart.options} series={valueChart.series} type="bar" height={380} />
        </>
    )
}
