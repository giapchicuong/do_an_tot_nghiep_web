import { createSlice } from "@reduxjs/toolkit"
import { login, fetchAccount } from "../actions/auth.action"
import { toast } from "react-toastify"

const initialState = {
    email: null,
    account: null,
    roleId: null,
    isAuthenticated: false,
    loadingLogin: false,
    errorLogin: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAccount.pending, (state, action) => {

            state.loadingLogin = true
        })

        // Check Auth
        builder.addCase(fetchAccount.fulfilled, (state, action) => {
            const res = action.payload

            if (res && res.data.EC === 0) {
                state.isAuthenticated = true
                state.email = res.data.DT.email
                state.roleId = res.data.DT.groupId
            }
            state.loadingLogin = false
        })

        // Login
        builder.addCase(login.pending, (state, action) => {
            state.loadingLogin = true
        })

        builder.addCase(login.fulfilled, (state, action) => {
            const res = action.payload

            if (res && res.data.EC === 0) {
                state.isAuthenticated = true
                state.email = res.data.DT.email
                state.roleId = res.data.DT.groupId
            } else {
                state.errorLogin = res.data.EM;
                toast.error(res.data.EM)

            }
            state.loadingLogin = false
        })
    }
})

export default authSlice.reducer
