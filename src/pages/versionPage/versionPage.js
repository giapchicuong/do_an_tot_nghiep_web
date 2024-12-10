import React, { useEffect, useState } from 'react'
import FilterLine from '../../components/FilterLine'
import { useDispatch, useSelector } from 'react-redux'
import LoadingPage from '../../components/LoadingPage'
import { createNewVersion, getAllVersions } from '../../redux/actions/version.action'
import VersionTable from '../../sections/versionPage/tableVersion'
import DefaultPopup from '../../components/DefaultPopup'
import DefaultInput from '../../components/DefaultInput'
import DefaultButton from '../../components/DefaultButton'
import { useFormik } from 'formik'
import { INPUT_REQUIRED } from '../../utils/error'
import * as Yup from 'yup'

export default function VersionPage() {
    const dispatch = useDispatch()

    const { isLoading, listData } = useSelector(state => state.versions)

    const [show, setShow] = useState(false)

    useEffect(() => {

        dispatch(getAllVersions())
    }, [dispatch]);

    const handleShow = () => {
        setShow(!show)
    }

    const formik = useFormik({
        initialValues: {
            nameVersion: '',
        },
        validationSchema: Yup.object({
            nameVersion: Yup.string().required(INPUT_REQUIRED),
        }),

        onSubmit: values => {

            dispatch(createNewVersion(values))

            setShow(false)

        }
    })


    return (
        <>
            {isLoading && <LoadingPage />}

            <main className='w-full h-fit flex flex-col gap-5'>

                <h1 className="text-[32px] font-semibold">Phiên bản</h1>

                <div className="flex justify-between ">

                    <div className="w-fix h-auto bg-white rounded-[14px] shadow-sm">
                        {/* <FilterLine /> */}
                    </div>

                    <div className="">
                        <DefaultButton
                            title={'+'}
                            widthFull={false}
                            onClick={handleShow}
                        />

                    </div>
                </div>

                <div className="w-full h-auto p-3 bg-white rounded-[14px] shadow-sm">

                    <VersionTable data={listData} />
                </div>

                {
                    show &&

                    <DefaultPopup
                        title={'Thêm phiên bản'}
                        handleShow={handleShow}
                        children={
                            <form className='w-full'>
                                <DefaultInput
                                    type='text'
                                    id='nameVersion'
                                    name='nameVersion'
                                    placeholder={'Ví dụ: 1.0.0'}
                                    title={'Tên phiên bản'}
                                    values={formik.values.nameVersion}
                                    onChange={(e) => {
                                        formik.handleChange(e)
                                    }}

                                />

                                <DefaultButton
                                    type='submit'
                                    title={'Thêm'}
                                    onClick={formik.handleSubmit}
                                />

                            </form>
                        }
                    />
                }
            </main >
        </>
    )
}
