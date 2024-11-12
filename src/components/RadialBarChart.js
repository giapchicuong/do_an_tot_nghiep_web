import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';

export default function RadialBarChart() {
    const { listDataAvgNumberStar } = useSelector(state => state.dashboard);

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
                },
                {
                    opposite: true,
                    title: {
                        text: 'Tổng số nhãn cho từng loại'
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
                categories: ['1/11', '2/11', '3/11', '4/11', '5/11', '6/11', '7/11'],
            }
        },
    };

    const [valueChart, setValueChart] = useState(defaultValue);

    useEffect(() => {
        console.log("listDataAvgNumberStar", listDataAvgNumberStar); // Add this log to inspect the data.
        if (listDataAvgNumberStar && listDataAvgNumberStar[1]?.averageRating
            && listDataAvgNumberStar[4]?.name && listDataAvgNumberStar[4]?.value
            && listDataAvgNumberStar[6]?.name && listDataAvgNumberStar[6]?.value
            && listDataAvgNumberStar[7]?.name && listDataAvgNumberStar[7]?.value
            && listDataAvgNumberStar[3]?.name && listDataAvgNumberStar[3]?.value
            && listDataAvgNumberStar[5]?.name && listDataAvgNumberStar[5]?.value
            && listDataAvgNumberStar[2]?.name && listDataAvgNumberStar[2]?.value
            && listDataAvgNumberStar[0]?.dateTime
        ) {
            setValueChart({
                series: [
                    {
                        name: "Trung bình số sao",
                        type: 'line',
                        data: listDataAvgNumberStar[1].averageRating.map((e) => parseInt(e))
                    },
                    {
                        name: listDataAvgNumberStar[4].name,
                        type: 'bar',
                        data: listDataAvgNumberStar[4].value.map((e) => parseInt(e))
                    },
                    {
                        name: listDataAvgNumberStar[6].name,
                        type: 'bar',
                        data: listDataAvgNumberStar[6].value.map((e) => parseInt(e))
                    },
                    {
                        name: listDataAvgNumberStar[7].name,
                        type: 'bar',
                        data: listDataAvgNumberStar[7].value.map((e) => parseInt(e))
                    },
                    {
                        name: listDataAvgNumberStar[3].name,
                        type: 'bar',
                        data: listDataAvgNumberStar[3].value.map((e) => parseInt(e))
                    },
                    {
                        name: listDataAvgNumberStar[5].name,
                        type: 'bar',
                        data: listDataAvgNumberStar[5].value.map((e) => parseInt(e))
                    },
                    {
                        name: listDataAvgNumberStar[2].name,
                        type: 'bar',
                        data: listDataAvgNumberStar[2].value.map((e) => parseInt(e))
                    },
                ],
                options: {
                    ...defaultValue.options,
                    xaxis: {
                        categories: listDataAvgNumberStar[0].dateTime
                    }
                }
            });
        } else {
            console.error("Dữ liệu không hợp lệ", listDataAvgNumberStar);
        }
    }, [listDataAvgNumberStar]);


    return (
        <div>
            {listDataAvgNumberStar ? (
                <ReactApexChart options={valueChart.options} series={valueChart.series} type="line" height={350} />
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );

}
