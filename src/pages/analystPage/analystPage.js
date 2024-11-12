import React, { useEffect } from 'react'
import ButtonCalendar from '../../components/ButtonCalendar'
import DonutChart from '../../components/DonutChart'
import RadarChart from '../../components/RadarChart'
import RadialBarChart from '../../components/RadialBarChart'
import ColumnChart from '../../sections/analystPage/ColumnChart'
import { useDispatch } from 'react-redux'
import { getAvgAndNumberOption, getPercentageOption, getPercentageStar } from '../../redux/actions/dashboard.action'

export default function AnalystPage() {
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getPercentageStar({ year: 2024, month: 11 }))
        dispatch(getPercentageOption({ year: 2024, month: 11 }))
        dispatch(getAvgAndNumberOption())
    }, [dispatch]);

    return (
        <main className='w-full h-fit flex flex-col gap-5'>

            <h1 className="text-[32px] font-semibold">Báo cáo</h1>


            <div className="w-full p-3 flex flex-col gap-5 bg-white rounded-[14px] shadow-sm">

                <div className="flex items-center justify-between">

                    <p className="text-2xl font-bold">Trung bình số sao và tổng từng loại nhãn của 7 ngày gần nhất trong tháng 11</p>

                    {/* <ButtonCalendar /> */}

                </div>

                <RadialBarChart />
            </div>


            <div className="grid grid-cols-3 gap-10">

                <div className="w-full p-5 flex flex-col justify-between bg-white rounded-[14px] shadow-sm">

                    <div className="text-[22px] font-bold ">Tỷ lệ phần trăm của từng loại nhãn trong tháng 11</div>

                    <DonutChart />
                </div>

                <div className="w-full p-5 flex flex-col justify-between bg-white rounded-[14px] shadow-sm">

                    <div className="text-[22px] font-bold ">Tỷ lệ phần trăm của từng số sao trong tháng 11</div>

                    <RadarChart />
                </div>

                <div className="w-full p-5 flex flex-col justify-between bg-white rounded-[14px] shadow-sm">

                    <div className="text-[22px] font-bold ">Tổng số sao đánh giá và nhãn tương ứng trong tháng 11</div>

                    {/* <RadialBarChart /> */}
                </div>
            </div>

            <div className="py-2.5"></div>

        </main>
    )
}