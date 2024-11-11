import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

export default function RadialBarChart() {

    const defaultValue = {

        series: [
            {
                name: "Trung bình số sao",
                type: 'line',
                data: [2.4, 2.3, 2.9, 3.4, 3.5, 4.4, 4.9]
            },
            {
                name: "Chính xác",
                type: 'bar',

                data: [10, 25, 30, 32, 32, 10, 10]
            },
            {
                name: "Nhanh",
                type: 'bar',
                data: [25, 10, 30, 22, 32, 22, 10]
            },
            {
                name: "Tiện lợi",
                type: 'bar',
                data: [30, 22, 10, 42, 20, 21, 102]
            },
            {
                name: "Chậm",
                type: 'bar',
                data: [11, 20, 30, 20, 20, 10, 50]
            },
            {
                name: "Không chính xác",
                type: 'bar',
                data: [32, 44, 38, 49, 50, 20, 11]
            },
            {
                name: "Bất tiện",
                type: 'bar',
                data: [30, 42, 55, 88, 12, 11, 3]
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            yaxis: [
                {
                    title: {
                        text: 'Trung bình số sao',
                    },

                }, {
                    opposite: true,
                    title: {
                        text: 'Tổng số nhãn cho từng loại'
                    }
                }],

            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['1/11', '2/11', '3/11', '4/11', '5/11', '6/11', '7/11',
                ],
            }
        },


    };
    const [valueChart, setValueChart] = useState(defaultValue)

    return (
        <div>
            <ReactApexChart options={valueChart.options} series={valueChart.series} type="line" height={350} />
        </div>
    )
}
