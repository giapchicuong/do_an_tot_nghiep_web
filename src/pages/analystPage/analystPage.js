import React, { useEffect, useState } from 'react'
import DonutChart from '../../components/DonutChart'
import RadarChart from '../../components/RadarChart'
import RadialBarChart from '../../components/RadialBarChart'
import { useDispatch, useSelector } from 'react-redux'
import { getAvgAndNumberOption, getPercentageOption, getPercentageStar } from '../../redux/actions/dashboard.action'
import LoadingPage from '../../components/LoadingPage'
import { getAllVersions } from '../../redux/actions/version.action'
import DropdownVersion from '../../sections/analystPage/DropdownVesion'

export default function AnalystPage() {
    const { isLoading } = useSelector(state => state.dashboard);

    const { listData } = useSelector(state => state.versions)

    const [version, setVersion] = useState(listData.find((e) => e.isSelectedVersion)?.nameVersion || 'Default Title')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllVersions())
        dispatch(getPercentageStar({ year: 2024, month: 11, versionId: version }))
        dispatch(getPercentageOption({ year: 2024, month: 11, versionId: version }))
        dispatch(getAvgAndNumberOption({
            "days": ["2024-11-01", "2024-11-02", "2024-11-03", "2024-11-04", "2024-11-05", "2024-11-06", "2024-11-07"]
        }))
    }, [dispatch, version]);

    const handleChangeVersion = (data) => {
        setVersion(data.versionId)
    }

    return (
        <>
            {isLoading && <LoadingPage />}

            <main className='w-full h-fit flex flex-col gap-5'>

                <div className="flex justify-between">

                    <h1 className="text-[32px] font-semibold">Báo cáo</h1>

                    <DropdownVersion
                        data={listData}
                        title={version}
                        handleClick={handleChangeVersion}
                    />
                </div>


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
        </>
    )
}