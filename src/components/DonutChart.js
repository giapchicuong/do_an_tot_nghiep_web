import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

export default function DonutChart() {

    const defaultValue = {

        series: [15, 20, 32, 10, 13, 10],
        options: {
            chart: {
                width: 380,
                type: 'pie',
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
