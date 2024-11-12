import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/Sidebar";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { FiBox } from "react-icons/fi";
import { FaChartLine } from "react-icons/fa";
import { RxCountdownTimer } from "react-icons/rx";
import AreaChart from "../components/AreaChart";
import DefaultTable from "../components/DefaultTable";
import ButtonCalendar from "../components/ButtonCalendar";
import { overviewTable } from "../mockData";
import ColumnStarChart from "../sections/appPage/ColumnStarChart";
import { useDispatch, useSelector } from "react-redux";
import { getListButton, getListReviewOptions, getTotalStar } from "../redux/actions/dashboard.action";
import { useEffect } from "react";
import LoadingPage from "../components/LoadingPage";
import DashboardTable from "../sections/appPage/dashboardTable";

export default function App() {

  const { pathname } = useLocation()

  return (
    <main className="flex relative z-10 w-full h-screen overflow-hidden">

      <SideBar />

      <article className="w-full h-full flex flex-col flex-grow-0 hide_scroll ">

        <Header />

        <div className="w-full h-full p-5 bg-primaryBg overflow-y-auto hide-scroll">

          {
            pathname === '/admin' ? <DashboardPage /> : <Outlet />
          }
        </div>
      </article>
    </main>
  );
}

;



export function DashboardPage() {


  const dispatch = useDispatch()

  const { isLoading, listDataButton, listDataReviewOption } = useSelector(state => state.dashboard)

  useEffect(() => {

    dispatch(getListButton())
    dispatch(getTotalStar())
    dispatch(getListReviewOptions())

  }, [dispatch]);

  return (
    <>
      {isLoading && <LoadingPage />}

      <main className='w-full h-fit flex flex-col gap-5'>

        <h1 className="text-[32px] font-semibold">Tổng quan</h1>

        <div className="grid grid-cols-4 gap-10">

          <div className="w-full p-3 flex flex-col justify-between aspect-video bg-white rounded-[14px] shadow-sm">

            <div className="flex items-center justify-between">

              <div className="flex flex-col gap-2">

                <p className="text-base font-normal text-stroke">Tổng số lượt đánh giá trái cây</p>
                {
                  listDataButton && listDataButton.fruit &&
                  <p className="text-[28px] font-bold">{listDataButton.fruit.total}</p>
                }

              </div>

              <div className="flex justify-center items-center w-[60px] rounded-3xl bg-iconDashboard1 opacity-60 aspect-square">

                <AiOutlineUsergroupAdd className="text-3xl text-black" />
              </div>
            </div>

            <div className="flex items-center gap-2">

              <HiOutlineArrowTrendingUp className="text-base font-normal text-uptrend" />
              {
                listDataButton && listDataButton.fruit &&
                <p className="text-base font-normal text-uptrend">{listDataButton.fruit.percent}%</p>
              }

              <p className="text-base font-normal text-uptrendText">so với hôm qua</p>
            </div>
          </div>

          <div className="w-full p-3 flex flex-col justify-between aspect-video bg-white rounded-[14px] shadow-sm">

            <div className="flex items-center justify-between">

              <div className="flex flex-col gap-2">

                <p className="text-base font-normal text-stroke">Tổng số lượt đánh giá Model</p>

                {
                  listDataButton && listDataButton.app &&
                  <p className="text-[28px] font-bold">{listDataButton.app.total}</p>
                }
              </div>

              <div className="flex justify-center items-center w-[60px] rounded-3xl bg-iconDashboard2 opacity-60 aspect-square">

                <FiBox className="text-3xl text-black" />
              </div>
            </div>

            <div className="flex items-center gap-2">

              <HiOutlineArrowTrendingUp className="text-base font-normal text-uptrend" />

              {
                listDataButton && listDataButton.app &&
                <p className="text-base font-normal text-uptrend">{listDataButton.app.percent}%</p>
              }

              <p className="text-base font-normal text-uptrendText">so với hôm qua</p>
            </div>
          </div>


          <div className="w-full p-3 flex flex-col justify-between aspect-video bg-white rounded-[14px] shadow-sm">

            <div className="flex items-center justify-between">

              <div className="flex flex-col gap-2">

                <p className="text-base font-normal text-stroke">Tổng số thành viên mới</p>
                {
                  listDataButton && listDataButton.newMember &&
                  <p className="text-[28px] font-bold">{listDataButton.newMember.total}</p>
                }
              </div>

              <div className="flex justify-center items-center w-[60px] rounded-3xl bg-iconDashboard3 opacity-60 aspect-square">

                <FaChartLine className="text-3xl text-black" />
              </div>
            </div>

            <div className="flex items-center gap-2">

              <HiOutlineArrowTrendingUp className="text-base font-normal text-uptrend" />
              {
                listDataButton && listDataButton.newMember &&
                <p className="text-base font-normal text-uptrend">{listDataButton.newMember.percent}%</p>
              }

              <p className="text-base font-normal text-uptrendText">so với hôm qua</p>
            </div>
          </div>


          <div className="w-full p-3 flex flex-col justify-between aspect-video bg-white rounded-[14px] shadow-sm">

            <div className="flex items-center justify-between">

              <div className="flex flex-col gap-2">

                <p className="text-base font-normal text-stroke">Tổng số người nâng cấp VIP</p>
                {
                  listDataButton && listDataButton.updateVip &&
                  <p className="text-[28px] font-bold">{listDataButton.updateVip.total}</p>
                }
              </div>

              <div className="flex justify-center items-center w-[60px] rounded-3xl bg-iconDashboard4 opacity-60 aspect-square">

                <RxCountdownTimer className="text-3xl text-black" />
              </div>
            </div>

            <div className="flex items-center gap-2">

              <HiOutlineArrowTrendingUp className="text-base font-normal text-uptrend" />
              {
                listDataButton && listDataButton.updateVip &&
                <p className="text-base font-normal text-uptrend">{listDataButton.updateVip.percent}%</p>
              }

              <p className="text-base font-normal text-uptrendText">so với hôm qua</p>
            </div>
          </div>
        </div>

        <div className="w-full p-3 flex flex-col gap-5 bg-white rounded-[14px] shadow-sm">

          <div className="flex items-center justify-between">

            <p className="text-2xl font-bold">Tổng số sao đánh giá App</p>

            <ButtonCalendar />

          </div>


          <ColumnStarChart />
        </div>



        <div className="w-full h-auto p-3 flex flex-col gap-5 bg-white rounded-[14px] shadow-sm">

          <div className="flex items-center justify-between">

            <p className="text-2xl font-bold">Chi tiết người đánh giá App</p>

            <ButtonCalendar />
          </div>

          <DashboardTable data={listDataReviewOption} />

        </div>

        <div className="py-2.5"></div>

      </main>
    </>
  );
}

