import React, { useEffect } from 'react'
import FilterLine from '../../components/FilterLine'
import { useDispatch, useSelector } from 'react-redux'
import LoadingPage from '../../components/LoadingPage'
import { getAllGroup } from '../../redux/actions/group.action'
import GroupsTable from '../../sections/groupsPage/groupsTable'

export default function GroupsPage() {
    const dispatch = useDispatch()

    const { isLoading, listData } = useSelector(state => state.groups)

    useEffect(() => {

        dispatch(getAllGroup())
    }, [dispatch]);


    return (
        <>
            {isLoading && <LoadingPage />}

            <main className='w-full h-fit flex flex-col gap-5'>

                <h1 className="text-[32px] font-semibold">Vai trò</h1>

                <div className="w-fit h-auto bg-white rounded-[14px] shadow-sm">

                    <FilterLine />
                </div>

                <div className="w-full h-auto p-3 bg-white rounded-[14px] shadow-sm">

                    <GroupsTable data={listData} />
                </div>

            </main>
        </>
    )
}
