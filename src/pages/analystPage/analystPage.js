import React from 'react'
import ButtonCalendar from '../../components/ButtonCalendar'
import DonutChart from '../../components/DonutChart'
import RadarChart from '../../components/RadarChart'
import RadialBarChart from '../../components/RadialBarChart'
import ColumnChart from '../../sections/analystPage/ColumnChart'

export default function AnalystPage() {
    return (
        <main className='w-full h-fit flex flex-col gap-5'>

            <h1 className="text-[32px] font-semibold">Báo cáo</h1>

            <div className="w-full p-3 flex flex-col gap-5 bg-white rounded-[14px] shadow-sm">

                <div className="flex items-center justify-between">

                    <p className="text-2xl font-bold">Tổng số loại nhãn trong 7 ngày gần nhất</p>

                    {/* <ButtonCalendar /> */}

                </div>

                <ColumnChart />
            </div>

            <div className="w-full p-3 flex flex-col gap-5 bg-white rounded-[14px] shadow-sm">

                <div className="flex items-center justify-between">

                    <p className="text-2xl font-bold">Tổng số lượt đánh giá sao trong 7 ngày gần nhất</p>

                    {/* <ButtonCalendar /> */}

                </div>

                <RadarChart />
            </div>

            <div className="grid grid-cols-3 gap-10">

                <div className="w-full p-5 flex flex-col justify-between bg-white rounded-[14px] shadow-sm">

                    <div className="text-[22px] font-bold ">Tổng số đánh giá của từng loại nhãn trong tháng 11</div>

                    <DonutChart />
                </div>

                <div className="w-full p-5 flex flex-col justify-between bg-white rounded-[14px] shadow-sm">

                    <div className="text-[22px] font-bold ">Hóa đơn</div>

                    <RadarChart />
                </div>

                <div className="w-full p-5 flex flex-col justify-between bg-white rounded-[14px] shadow-sm">

                    <div className="text-[22px] font-bold ">Tổng số sao đánh giá theo phần trăm trong tháng 11</div>

                    <RadialBarChart />
                </div>
            </div>

            <div className="py-2.5"></div>

        </main>
    )
}