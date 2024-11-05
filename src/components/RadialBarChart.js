import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

export default function RadialBarChart() {

    const defaultValue = {

        series: [5, 5, 20, 30, 40],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'Total',

                        }
                    }
                }
            },
            labels: ['1 sao', '2 sao', '3 sao', '4 sao', '5 sao'],
        },

    }

    const [valueChart, setValueChart] = useState(defaultValue)

    return (
        <div>
            <ReactApexChart options={valueChart.options} series={valueChart.series} type="radialBar" />
        </div>
    )
}
