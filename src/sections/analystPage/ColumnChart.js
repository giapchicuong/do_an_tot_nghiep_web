// import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// export default function ColumnChart() {

//     const defaultValue = {

//         series: [
//             {
//                 name: 'Nhanh',
//                 data: [44, 55, 57, 56, 61, 58, 63,]
//             }, {
//                 name: 'Chính xác',
//                 data: [76, 85, 101, 98, 87, 105, 91,]
//             }, {
//                 name: 'Tiện lợi',
//                 data: [35, 41, 36, 26, 45, 48, 52,]
//             },
//             {
//                 name: 'Chậm',
//                 data: [44, 55, 57, 56, 61, 58, 63,]
//             }, {
//                 name: 'Không chính xác',
//                 data: [76, 85, 101, 98, 87, 105, 91,]
//             }, {
//                 name: 'Bất tiện',
//                 data: [35, 41, 36, 26, 45, 48, 52,]
//             },
//         ],
//         options: {
//             chart: {
//                 type: 'bar',
//                 height: 350
//             },
//             plotOptions: {
//                 bar: {
//                     horizontal: false,
//                     columnWidth: '55%',
//                     endingShape: 'rounded'
//                 },
//             },
//             dataLabels: {
//                 enabled: false
//             },
//             stroke: {
//                 show: true,
//                 width: 2,
//                 colors: ['transparent']
//             },
//             xaxis: {
//                 categories: ['1/11', '2/11', '3/11', '4/11', '5/11', '6/11', '7/11'],
//             },
//             yaxis: {

//             },
//             fill: {
//                 opacity: 1
//             },

//         },


//     };

//     const [valueChart, setValueChart] = useState(defaultValue)

//     return (
//         <>
//             <div id="chart">
//                 <ReactApexChart options={valueChart.options} series={valueChart.series} type="bar" height={350} />
//             </div>
//         </>
//     );
// }

import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function ColumnChart() {

    const defaultValue = {

        series: [
            {
                name: 'Nhanh',
                data: [44, 55, 57, 56, 61, 58, 63,]
            }, {
                name: 'Chính xác',
                data: [76, 85, 101, 98, 87, 105, 91,]
            }, {
                name: 'Tiện lợi',
                data: [35, 41, 36, 26, 45, 48, 52,]
            },
            {
                name: 'Chậm',
                data: [44, 55, 57, 56, 61, 58, 63,]
            }, {
                name: 'Không chính xác',
                data: [76, 85, 101, 98, 87, 105, 91,]
            }, {
                name: 'Bất tiện',
                data: [35, 41, 36, 26, 45, 48, 52,]
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['1/11', '2/11', '3/11', '4/11', '5/11', '6/11', '7/11'],
            },
            yaxis: {

            },
            fill: {
                opacity: 1
            },

        },


    };

    const [valueChart, setValueChart] = useState(defaultValue)

    return (
        <>
            <div id="chart">
                <ReactApexChart options={valueChart.options} series={valueChart.series} type="bar" height={350} />
            </div>
        </>
    );
}