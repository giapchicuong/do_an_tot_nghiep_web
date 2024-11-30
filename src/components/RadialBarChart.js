import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import LoadingPage from './LoadingPage';

export default function RadialBarChart() {
    const { listDataAvgNumberStar, isLoading } = useSelector((state) => state.dashboard)


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
            Array.isArray(listDataAvgNumberStar.dates) &&
            Array.isArray(listDataAvgNumberStar.listCountOption) &&
            listDataAvgNumberStar.avgStar
        ) {
            const avgStars = listDataAvgNumberStar.avgStar?.value.map((e) => parseFloat(e || 0).toFixed(2));
            const results = listDataAvgNumberStar.listCountOption.map((item) => ({
                name: item.nameOption,
                type: 'bar',
                data: item.value.map((e) => e || 0),
            }));

            setValueChart({
                series: [
                    { name: 'Trung bình số sao', type: 'line', data: avgStars },
                    ...results,
                ],
                options: {
                    ...defaultValue.options,
                    xaxis: { categories: listDataAvgNumberStar.dates },
                },
            });
        }
    }, [listDataAvgNumberStar]);


    return (
        <div>
            {valueChart.series.length > 0 && valueChart.options.xaxis.categories.length > 0 ? (
                <ReactApexChart options={valueChart.options} series={valueChart.series} type="line" height={350} />
            ) : (
                !isLoading && <p>Loading....</p>
            )}
        </div>
    );

}
