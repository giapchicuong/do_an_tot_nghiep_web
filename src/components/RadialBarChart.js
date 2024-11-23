import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import LoadingPage from './LoadingPage';

export default function RadialBarChart() {
    const { listDataAvgNumberStar, isLoading } = useSelector((state) => state.dashboard);

    // const defaultValue = {
    //     series: [],
    //     options: {
    //         chart: {
    //             height: 350,
    //             type: 'line',
    //             zoom: { enabled: false },
    //         },
    //         dataLabels: { enabled: false },
    //         stroke: { curve: 'straight' },
    //         yaxis: [
    //             {
    //                 min: 0, // Giá trị thấp nhất
    //                 max: 5, // Giá trị cao nhất
    //                 tickAmount: 5, // Tổng số khoảng
    //                 title: {
    //                     text: 'Trung bình số sao',
    //                     style: {
    //                         fontSize: '15px',
    //                         fontWeight: 'bold',
    //                     },
    //                 },
    //                 labels: {
    //                     formatter: (val) => `${val}`,
    //                 },
    //             },
    //             {
    //                 opposite: true,
    //                 title: {
    //                     text: 'Tổng số nhãn cho từng loại',
    //                     style: {
    //                         fontSize: '15px',
    //                         fontWeight: 'bold',
    //                     },
    //                 },
    //                 labels: {
    //                     formatter: (val) => `${val}`,
    //                 },
    //             },
    //         ],
    //         grid: {
    //             row: {
    //                 colors: ['#f3f3f3', 'transparent'],
    //                 opacity: 0.5,
    //             },
    //         },
    //         xaxis: {
    //             categories: [],
    //         },
    //     },
    // };


    const defaultValue = {
        series: [],
        options: {
            chart: { height: 350, type: 'line', zoom: { enabled: false } },
            dataLabels: { enabled: false },
            stroke: { curve: 'straight' },
            yaxis: [
                {
                    min: 0,
                    max: 5,
                    tickAmount: 5,
                    title: { text: 'Trung bình số sao', style: { fontSize: '15px', fontWeight: 'bold' } },
                    labels: { formatter: (val) => `${val}` },
                },
                {
                    opposite: true,
                    title: { text: 'Tổng số nhãn cho từng loại', style: { fontSize: '15px', fontWeight: 'bold' } },
                    labels: { formatter: (val) => `${val}` },
                },
            ],
            grid: { row: { colors: ['#f3f3f3', 'transparent'], opacity: 0.5 } },
            xaxis: { categories: [] },
        },
    };

    const [valueChart, setValueChart] = useState(defaultValue);

    useEffect(() => {
        if (
            listDataAvgNumberStar &&
            Array.isArray(listDataAvgNumberStar.listDataAvgStar) &&
            Array.isArray(listDataAvgNumberStar.result) &&
            Array.isArray(listDataAvgNumberStar.listDayMonth)
        ) {
            const avgStars = listDataAvgNumberStar.listDataAvgStar.map((e) => parseFloat(e || 0));
            const results = listDataAvgNumberStar.result.map((item) => ({
                name: item.name,
                type: 'bar',
                data: item.data.map((e) => e || 0),
            }));

            setValueChart({
                series: [
                    { name: 'Trung bình số sao', type: 'line', data: avgStars },
                    ...results,
                ],
                options: {
                    ...defaultValue.options,
                    xaxis: { categories: listDataAvgNumberStar.listDayMonth },
                },
            });
        } else {
            console.error('Invalid data:', listDataAvgNumberStar);
        }
    }, [listDataAvgNumberStar]);


    return (
        <div>
            {isLoading && <LoadingPage />}
            {valueChart.series.length > 0 && valueChart.options.xaxis.categories.length > 0 ? (
                <ReactApexChart options={valueChart.options} series={valueChart.series} type="line" height={350} />
            ) : (
                !isLoading && <p>Loading....</p>
            )}
        </div>
    );

}
