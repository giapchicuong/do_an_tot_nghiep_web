import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';

export default function ColumnStarChart() {
    const { listDataTotalStar } = useSelector(state => state.dashboard);

    // Giá trị mặc định ban đầu
    const defaultValue = {
        series: [{
            data: []
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
                categories: []
            },
            tooltip: {
                enabled: false
            }
        },
    };

    const [valueChart, setValueChart] = useState(defaultValue);

    useEffect(() => {
        if (listDataTotalStar?.value?.length && listDataTotalStar?.column?.length) {
            setValueChart({
                series: [{
                    data: listDataTotalStar.value
                }],
                options: {
                    ...defaultValue.options,
                    xaxis: {
                        categories: listDataTotalStar.column
                    }
                }
            });
        }
    }, [listDataTotalStar]);

    return (
        <div id="chart">
            <ReactApexChart options={valueChart.options} series={valueChart.series} type="bar" height={450} />
        </div>
    );
}
