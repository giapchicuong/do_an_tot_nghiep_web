import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function ColumnStarChart() {

    const defaultValue = {
        series: [{
            data: [10, 20, 30, 40, 50]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    borderRadiusApplication: 'end',
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ['1 sao', '2 sao', '3 sao', '4 sao', '5 sao']
            },
            tooltip: {
                enabled: false
            }
        },
    };

    const [valueChart, setValueChart] = useState(defaultValue);

    return (
        <>
            <div id="chart">
                <ReactApexChart options={valueChart.options} series={valueChart.series} type="bar" height={450} />
            </div>
        </>
    );
}
