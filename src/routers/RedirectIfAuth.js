// navigate when check status login

import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function RedirectIfAuth({ children }) {
    const { isAuthenticated, roleId } = useSelector(state => state.auth)

    const isNavigateTo = (role) => {
        switch (parseInt(role)) {
            case 1:
                return '/admin'
            case 2:
                return '/customer'
            default:
                return '/auth';
        }
    }

    return isAuthenticated ? <Navigate to={isNavigateTo(roleId)} /> : children
}