import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAccount } from './redux/actions/auth.action';
import { RouterProvider } from 'react-router-dom';
import router from './routers';
import { ToastContainer } from 'react-toastify';

export default function App() {
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(fetchAccount())
    }, [dispatch]);

    return (
        <>
            <RouterProvider router={router} />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}
