import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';

export default function DonutChart() {

    const { listDataPercentageOption } = useSelector(state => state.dashboard);

    const defaultValue = {

        series: [],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: [],
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


    useEffect(() => {
        if (listDataPercentageOption[2]?.optionPercentage && listDataPercentageOption[0]?.reviewOptionName) {
            setValueChart({
                series: listDataPercentageOption[2].optionPercentage.map((e) => parseInt(e)),
                options: {
                    ...defaultValue.options,
                    labels: listDataPercentageOption[0].reviewOptionName,

                }
            });
        }

    }, [listDataPercentageOption]);

    return (
        <div>
            <ReactApexChart options={valueChart.options} series={valueChart.series} type="donut" />
        </div>
    )
}
