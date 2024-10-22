import React, { useEffect } from 'react'
import FilterLine from '../../components/FilterLine'
import { useDispatch, useSelector } from 'react-redux'
import LoadingPage from '../../components/LoadingPage'
import { getAllUserStatusLevel } from '../../redux/actions/userStatusLevel.action'
import UserStatusLevelsTable from '../../sections/userStatusLevelsPage/userStatusLevelsTable'

export default function UserStatusLevelsPage() {
    const dispatch = useDispatch()

    const { isLoading, listData } = useSelector(state => state.userStatusLevels)

    useEffect(() => {

        dispatch(getAllUserStatusLevel())
    }, [dispatch]);


    return (
        <>
            {isLoading && <LoadingPage />}

            <main className='w-full h-fit flex flex-col gap-5'>

                <h1 className="text-[32px] font-semibold">Thành viên</h1>

                <div className="w-fit h-auto bg-white rounded-[14px] shadow-sm">

                    <FilterLine />
                </div>

                <div className="w-full h-auto p-3 bg-white rounded-[14px] shadow-sm">

                    <UserStatusLevelsTable data={listData} />
                </div>

            </main>
        </>
    )
}
