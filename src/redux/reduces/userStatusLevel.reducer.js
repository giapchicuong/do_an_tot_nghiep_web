import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { getAllUserStatusLevel } from "../actions/userStatusLevel.action"

const initialState = {
    isLoading: false,
    isError: false,
    listData: []
}

const userSlice = createSlice({
    name: 'userStatusLevel',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getAllUserStatusLevel.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getAllUserStatusLevel.fulfilled, (state, action) => {
            const res = action.payload

            if (res && res.EC === 0) {
                state.listData = res.DT
            }

            state.isLoading = false
        })
        builder.addCase(getAllUserStatusLevel.rejected, (state, action) => {
            const res = action.payload

            if (res && res.EC !== 0) {
                state.isError = true
                toast.error(res.EM)
            }

        })
    }
})

export default userSlice.reducer