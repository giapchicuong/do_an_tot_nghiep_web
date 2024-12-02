import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { getListButton, getListReviewOptions, getTotalStar } from "../actions/dashboard.action"

const initialState = {
    isLoading: false,
    isError: false,
    listDataButton: [],
    listDataTotalStar: [],
    listDataReviewOption: [],
}

const userSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getListButton.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getListButton.fulfilled, (state, action) => {
            const res = action.payload

            if (res && res.EC === 0) {
                state.listDataButton = res.DT
            }

            state.isLoading = false
        })
        builder.addCase(getListButton.rejected, (state, action) => {
            const res = action.payload

            if (res && res.EC !== 0) {
                state.isError = true
                toast.error(res.EM)
            }

        })
        builder.addCase(getTotalStar.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getTotalStar.fulfilled, (state, action) => {
            const res = action.payload

            if (res && res.EC === 0) {
                state.listDataTotalStar = res.DT
            }

            state.isLoading = false
        })
        builder.addCase(getTotalStar.rejected, (state, action) => {
            const res = action.payload

            if (res && res.EC !== 0) {
                state.isError = true
                toast.error(res.EM)
            }

        })
        builder.addCase(getListReviewOptions.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getListReviewOptions.fulfilled, (state, action) => {
            const res = action.payload

            if (res && res.EC === 0) {
                state.listDataReviewOption = res.DT
            }

            state.isLoading = false
        })
        builder.addCase(getListReviewOptions.rejected, (state, action) => {
            const res = action.payload

            if (res && res.EC !== 0) {
                state.isError = true
                toast.error(res.EM)
            }

        })
    }
})

export default userSlice.reducer