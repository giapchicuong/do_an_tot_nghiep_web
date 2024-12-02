import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPage from '../../components/LoadingPage';
import { getAllVersions } from '../../redux/actions/version.action';
import DropdownVersion from '../../sections/analystPage/DropdownVesion';
import ButtonCalendar from '../../components/ButtonCalendar';
import { convertDate, convertMonthYear, getDatesInRange } from '../../utils/helperFunction';
import PiePercentageOptionChart from '../../sections/analystPage/PiePercentageOptionChart';
import PiePercentageStarChart from '../../sections/analystPage/PiePercentageStarChart';
import LineAndColumnAvgChart from '../../sections/analystPage/LineAndColumnAvgChart';
import { getAvgAndNumberOption, getPercentageOption, getPercentageStar } from '../../redux/actions/analyst.action';

export default function AnalystPage() {
    const { isLoadingPercentageStar, isLoadingPercentageOption, isLoadingAvgNumberStar } = useSelector(state => state.analyst);
    const { listData } = useSelector(state => state.versions);

    const [version, setVersion] = useState(null);
    const [dateAvgChart, setDateAvgChart] = useState([]);
    const [dateOptionMonth, setDateOptionMonth] = useState();
    const [dateStarMonth, setDateStarMonth] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllVersions());
    }, [dispatch]);

    useEffect(() => {
        const today = new Date();

        const startDate = new Date(today);
        startDate.setDate(today.getDate() - 10);

        const dates = getDatesInRange([startDate, today]);

        setDateAvgChart(dates);
        setDateOptionMonth({ month: startDate.getMonth() + 1, year: startDate.getFullYear() });
        setDateStarMonth({ month: startDate.getMonth() + 1, year: startDate.getFullYear() });
    }, []);


    useEffect(() => {
        if (listData && listData.length > 0) {
            const selectedVersion = listData.find((e) => e.isSelectedVersion);
            if (selectedVersion) {
                setVersion(selectedVersion);
            } else {
                setVersion(listData[0]);
            }
        }
    }, [listData]);

    useEffect(() => {
        if (version) {
            dispatch(getPercentageStar({ year: dateStarMonth.year, month: dateStarMonth.month, versionId: version.versionId }));
            dispatch(getPercentageOption({
                year: dateOptionMonth.year,
                month: dateOptionMonth.month,
                versionId: version.versionId
            }));
            dispatch(getAvgAndNumberOption({
                dates: dateAvgChart,
                versionId: version.versionId
            }));
        }
    }, [dispatch, version]);

    useEffect(() => {
        if (version) {
            dispatch(getPercentageStar({ year: dateStarMonth.year, month: dateStarMonth.month, versionId: version.versionId }));

        }
    }, [dispatch, version, dateStarMonth]);

    useEffect(() => {
        if (version) {
            dispatch(getPercentageOption({
                year: dateOptionMonth.year,
                month: dateOptionMonth.month,
                versionId: version.versionId
            }));

        }
    }, [dispatch, version, dateOptionMonth]);

    useEffect(() => {
        if (version) {

            dispatch(getAvgAndNumberOption({
                dates: dateAvgChart,
                versionId: version.versionId
            }));
        }
    }, [dispatch, version, dateAvgChart]);

    const handleChangeVersion = (data) => {
        setVersion(data);
    };

    const handleChangeDateAvgChart = (date) => {
        setDateAvgChart(getDatesInRange(date));
    };

    const handleChangeDateOption = (date) => {
        setDateOptionMonth(convertMonthYear(date));
    };

    const handleChangeDateStar = (date) => {
        setDateStarMonth(convertMonthYear(date));
    };

    return (
        <>
            {isLoadingPercentageStar && isLoadingPercentageOption && isLoadingAvgNumberStar && <LoadingPage />}

            <main className='w-full h-fit flex flex-col gap-5'>
                <div className="flex justify-between">
                    <h1 className="text-[32px] font-semibold">Báo cáo</h1>

                    <DropdownVersion
                        data={listData}
                        title={version?.nameVersion || 'Chọn phiên bản'}
                        handleClick={handleChangeVersion}
                    />
                </div>

                <div className="w-full p-3 flex flex-col gap-5 bg-white rounded-[14px] shadow-sm">
                    <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold">Trung bình số sao và tổng từng loại nhãn</p>
                        <ButtonCalendar
                            buttonLabel={`${dateAvgChart && dateAvgChart.length > 0 ? convertDate(dateAvgChart[0]) : ''} - ${dateAvgChart && dateAvgChart.length > 0 ? convertDate(dateAvgChart[dateAvgChart.length - 1]) : ''}`}
                            onDateChange={handleChangeDateAvgChart}
                            selectRange
                        />
                    </div>
                    <LineAndColumnAvgChart />
                </div>

                <div className="grid grid-cols-3 gap-10">
                    <div className="w-full p-5 flex flex-col justify-between bg-white rounded-[14px] shadow-sm">
                        <div className="flex items-center justify-between">
                            <div className="text-[22px] font-bold">Tỷ lệ phần trăm của từng loại nhãn</div>
                            <ButtonCalendar
                                buttonLabel={`Tháng ${dateOptionMonth?.month ?? ''}`}
                                onDateChange={handleChangeDateOption}
                                viewYear={true}
                            />
                        </div>
                        <PiePercentageOptionChart />
                    </div>

                    <div className="w-full p-5 flex flex-col justify-between bg-white rounded-[14px] shadow-sm">
                        <div className="flex items-center justify-between">
                            <div className="text-[22px] font-bold">Tỷ lệ phần trăm của từng số sao</div>
                            <ButtonCalendar
                                buttonLabel={`Tháng ${dateStarMonth?.month ?? ''}`}
                                onDateChange={handleChangeDateStar}
                                viewYear={true}
                            />
                        </div>
                        <PiePercentageStarChart />
                    </div>

                    {/* <div className="w-full p-5 flex flex-col justify-between bg-white rounded-[14px] shadow-sm">
                        <div className="text-[22px] font-bold">Tổng số sao đánh giá và nhãn tương ứng </div>
                    </div> */}
                </div>

                <div className="py-2.5"></div>
            </main>
        </>
    );
}
