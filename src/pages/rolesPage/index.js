import React, { useEffect } from 'react'
import FilterLine from '../../components/FilterLine'
import { useDispatch, useSelector } from 'react-redux'
import LoadingPage from '../../components/LoadingPage'
import { getAllRole } from '../../redux/actions/role.action'
import RolesTable from '../../sections/rolesPage/rolesTable'

export default function RolesPage() {
    const dispatch = useDispatch()

    const { isLoading, listData } = useSelector(state => state.roles)

    useEffect(() => {

        dispatch(getAllRole())
    }, [dispatch]);


    return (
        <>
            {isLoading && <LoadingPage />}

            <main className='w-full h-fit flex flex-col gap-5'>

                <h1 className="text-[32px] font-semibold">Nhóm quyền</h1>

                <div className="w-fit h-auto bg-white rounded-[14px] shadow-sm">

                    <FilterLine />
                </div>

                <div className="w-full h-auto p-3 bg-white rounded-[14px] shadow-sm">

                    <RolesTable data={listData} />
                </div>

            </main>
        </>
    )
}
