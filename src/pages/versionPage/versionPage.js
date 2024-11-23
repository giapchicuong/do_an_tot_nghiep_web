import React, { useEffect } from 'react'
import FilterLine from '../../components/FilterLine'
import { useDispatch, useSelector } from 'react-redux'
import LoadingPage from '../../components/LoadingPage'
import { getAllVersions } from '../../redux/actions/version.action'
import VersionTable from '../../sections/versionPage/tableVersion'

export default function VersionPage() {
    const dispatch = useDispatch()

    const { isLoading, listData } = useSelector(state => state.versions)

    useEffect(() => {

        dispatch(getAllVersions())
    }, [dispatch]);


    return (
        <>
            {isLoading && <LoadingPage />}

            <main className='w-full h-fit flex flex-col gap-5'>

                <h1 className="text-[32px] font-semibold">Phiên bản</h1>

                <div className="w-fit h-auto bg-white rounded-[14px] shadow-sm">

                    <FilterLine />
                </div>

                <div className="w-full h-auto p-3 bg-white rounded-[14px] shadow-sm">

                    <VersionTable data={listData} />
                </div>

            </main>
        </>
    )
}
