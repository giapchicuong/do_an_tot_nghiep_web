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
            }],
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val.toFixed(1) + "%";
                    }
                }
            }
        },
    };

    const [valueChart, setValueChart] = useState(defaultValue)

    useEffect(() => {
        if (listDataPercentageOption) {
            setValueChart({
                series: listDataPercentageOption.listRating.map((e) => parseFloat(e)),
                options: {
                    ...defaultValue.options,
                    labels: listDataPercentageOption.nameOption,
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
