import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
export default function PiePercentageStarChart() {

    const { listDataPercentageStar } = useSelector(state => state.analyst);

    const defaultValue = {
        series: [{
            data: []
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
                    return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val + '%';
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
                categories: []
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            tooltip: {
                theme: 'dark',
                x: {
                    show: false,
                    title: {
                        formatter: function () {
                            return '';
                        }
                    }
                },
                y: {
                    formatter: function (val) {
                        return val + '%';
                    },
                    title: {
                        formatter: function () {
                            return '';
                        }
                    }
                }
            }
        }
    };


    const [valueChart, setValueChart] = useState(defaultValue)


    useEffect(() => {
        if (listDataPercentageStar && listDataPercentageStar.value && listDataPercentageStar.name) {
            setValueChart({
                series: [{
                    data: listDataPercentageStar.value
                }],
                options: {
                    ...defaultValue.options,
                    xaxis: {
                        categories: listDataPercentageStar.name
                    }
                }
            });
        }

    }, [listDataPercentageStar]);


    return (
        <>
            <ReactApexChart options={valueChart.options} series={valueChart.series} type="bar" height={380} />
        </>
    )
}
