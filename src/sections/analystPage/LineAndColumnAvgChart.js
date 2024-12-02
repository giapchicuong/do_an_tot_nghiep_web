import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import LoadingPage from '../../components/LoadingPage';

export default function LineAndColumnAvgChart() {
    const { listDataAvgNumberStar } = useSelector((state) => state.analyst);
    const [valueChart, setValueChart] = useState({
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
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (
            listDataAvgNumberStar &&
            Array.isArray(listDataAvgNumberStar.dates) &&
            Array.isArray(listDataAvgNumberStar.listCountOption) &&
            listDataAvgNumberStar.avgStar
        ) {
            setIsLoading(true);
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
                    ...valueChart.options,
                    xaxis: { categories: listDataAvgNumberStar.dates },
                },
            });
            setIsLoading(false);
        }
    }, [listDataAvgNumberStar]);

    return (
        <div>
            {isLoading ? (
                <LoadingPage />
            ) : (
                <ReactApexChart options={valueChart.options} series={valueChart.series} type="line" height={350} />
            )}
        </div>
    );
}
