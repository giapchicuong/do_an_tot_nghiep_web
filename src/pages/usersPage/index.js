import React, { useEffect } from 'react'
import FilterLine from '../../components/FilterLine'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUser } from '../../redux/actions/user.action'
import LoadingPage from '../../components/LoadingPage'
import UserTable from '../../sections/userPage/userTable'

export default function UsersPage() {
    const dispatch = useDispatch()

    const { isLoading, listData } = useSelector(state => state.users)

    useEffect(() => {

        dispatch(getAllUser())
    }, [dispatch]);


    return (
        <>
            {isLoading && <LoadingPage />}

            <main className='w-full h-fit flex flex-col gap-5'>

                <h1 className="text-[32px] font-semibold">Người dùng</h1>

                <div className="w-fit h-auto bg-white rounded-[14px] shadow-sm">

                    {/* <FilterLine /> */}
                </div>

                <div className="w-full h-auto p-3 bg-white rounded-[14px] shadow-sm">

                    <UserTable data={listData} />
                </div>

            </main>
        </>
    )
}
