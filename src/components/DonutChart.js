import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

export default function DonutChart() {

    const defaultValue = {
        series: [44, 55, 41, 17, 15, 30],
        options: {
            chart: {
                width: 380,
                type: 'donut',
            },
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 270
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#fb9999', '#90802c', '#13a0d4', '#4129c0', '#c441e9', '#36f724'],
            fill: {
                type: 'gradient',
            },
            labels: ['Nhanh', 'Chính xác', 'Tiện lợi', 'Chậm', 'Không chính xác', 'Bất tiện'],

            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },


    };

    const [valueChart, setValueChart] = useState(defaultValue)

    return (
        <div>
            <ReactApexChart options={valueChart.options} series={valueChart.series} type="donut" />
        </div>
    )
}
