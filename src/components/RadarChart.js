import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

export default function RadarChart() {

    const defaultValue = {

        series: [
            {
                name: '1 sao',
                data: [10, 20, 55, 40, 80, 10, 20]
            },
            {
                name: '2 sao',
                data: [11, 32, 45, 32, 34, 52, 41]
            },
            {
                name: '3 sao',
                data: [20, 25, 30, 44, 10, 42, 14]
            },
            {
                name: '4 sao',
                data: [22, 53, 23, 82, 85, 80, 100]
            },
            {
                name: '5 sao',
                data: [22, 10, 63, 43, 77, 44, 22]
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'line'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'string',
                categories: ["1/11", "2/11", "3/11", "4/11", "5/11", "6/11", "7/11",]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },



    };


    const [valueChart, setValueChart] = useState(defaultValue)

    return (
        <>
            <ReactApexChart options={valueChart.options} series={valueChart.series} type="line" height={350} />
        </>
    )
}
