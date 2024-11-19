import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import LoadingPage from './LoadingPage';

export default function RadialBarChart() {
    const { listDataAvgNumberStar, isLoading } = useSelector(state => state.dashboard);

    const defaultValue = {
        series: [
            {
                name: "Trung bình số sao",
                type: 'line',
                data: []
            },
            {
                name: "Chính xác",
                type: 'bar',
                data: []
            },
            {
                name: "Nhanh",
                type: 'bar',
                data: []
            },
            {
                name: "Tiện lợi",
                type: 'bar',
                data: []
            },
            {
                name: "Chậm",
                type: 'bar',
                data: []
            },
            {
                name: "Không chính xác",
                type: 'bar',
                data: []
            },
            {
                name: "Bất tiện",
                type: 'bar',
                data: []
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

                    min: 1, // Giá trị thấp nhất
                    max: 5, // Giá trị cao nhất
                    tickAmount: 4, // Tổng số khoảng
                    title: {
                        text: 'Trung bình số sao',
                        style: {
                            fontSize: '15px', // Adjust the font size here
                            fontWeight: 'bold', // Optional: set font weight
                        }
                    },
                    labels: {
                        formatter: (val) => `${val}`, // Định dạng nhãn
                    }
                },
                {
                    opposite: true,
                    title: {
                        text: 'Tổng số nhãn cho từng loại',
                        style: {
                            fontSize: '15px', // Adjust the font size here
                            fontWeight: 'bold', // Optional: set font weight
                        }
                    },
                    labels: {
                        formatter: (val) => `${val}`, // Định dạng nhãn
                    }
                }
            ],
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'],
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: [],
            }
        },
    };

    const [valueChart, setValueChart] = useState(defaultValue);

    useEffect(() => {
        if (
            listDataAvgNumberStar &&
            listDataAvgNumberStar.listDataAvgStar &&
            listDataAvgNumberStar.result &&
            listDataAvgNumberStar.listDayMonth
        ) {
            setValueChart({
                series: [
                    {
                        name: "Trung bình số sao",
                        type: 'line',
                        data: (listDataAvgNumberStar.listDataAvgStar || []).map((e) => parseFloat(e)),
                    },
                    ...listDataAvgNumberStar.result.map(item => ({
                        name: item.name,
                        type: 'bar',
                        data: item.data.map((e) => parseFloat(e))
                    }))
                ],
                options: {
                    ...defaultValue.options,
                    xaxis: {
                        categories: listDataAvgNumberStar.listDayMonth
                    }
                }
            });
        }
    }, [listDataAvgNumberStar]);


    return (
        <div>
            {isLoading && <LoadingPage />}

            {listDataAvgNumberStar?.listDataAvgStar?.length > 0 && (
                <ReactApexChart options={valueChart.options} series={valueChart.series} type="line" height={350} />
            )}

        </div>
    );

}
