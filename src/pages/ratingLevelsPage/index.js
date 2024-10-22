import React, { useEffect } from 'react'
import FilterLine from '../../components/FilterLine'
import { useDispatch, useSelector } from 'react-redux'
import LoadingPage from '../../components/LoadingPage'
import { getAllRatingLevel } from '../../redux/actions/ratingLevel.action'
import RatingLevelTable from '../../sections/ratingLevelsPage/ratingLevelTable'

export default function RatingLevelsPage() {
    const dispatch = useDispatch()

    const { isLoading, listData } = useSelector(state => state.ratingLevels)

    useEffect(() => {

        dispatch(getAllRatingLevel())
    }, [dispatch]);


    return (
        <>
            {isLoading && <LoadingPage />}

            <main className='w-full h-fit flex flex-col gap-5'>

                <h1 className="text-[32px] font-semibold">Nhóm hạng đánh giá</h1>

                <div className="w-fit h-auto bg-white rounded-[14px] shadow-sm">

                    <FilterLine />
                </div>

                <div className="w-full h-auto p-3 bg-white rounded-[14px] shadow-sm">

                    <RatingLevelTable data={listData} />
                </div>

            </main>
        </>
    )
}
