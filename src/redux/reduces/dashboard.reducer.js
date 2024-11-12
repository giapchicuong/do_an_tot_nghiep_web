import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { getAvgAndNumberOption, getListButton, getListReviewOptions, getPercentageOption, getPercentageStar, getTotalStar } from "../actions/dashboard.action"

const initialState = {
    isLoading: false,
    isError: false,
    listDataButton: [],
    listDataTotalStar: [],
    listDataReviewOption: [],
    listDataPercentageStar: [],
    listDataPercentageOption: [],
    listDataAvgNumberStar: [],
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

            if (res && res.data && res.data.EC === 0) {
                state.listDataButton = res.data.DT
            }

            state.isLoading = false
        })
        builder.addCase(getListButton.rejected, (state, action) => {
            const res = action.payload

            if (res && res.data && res.data.EC !== 0) {
                state.isError = true
                toast.error(res.data.EM)
            }

        })
        builder.addCase(getTotalStar.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getTotalStar.fulfilled, (state, action) => {
            const res = action.payload

            if (res && res.data && res.data.EC === 0) {
                state.listDataTotalStar = res.data.DT
            }

            state.isLoading = false
        })
        builder.addCase(getTotalStar.rejected, (state, action) => {
            const res = action.payload

            if (res && res.data && res.data.EC !== 0) {
                state.isError = true
                toast.error(res.data.EM)
            }

        })
        builder.addCase(getListReviewOptions.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getListReviewOptions.fulfilled, (state, action) => {
            const res = action.payload

            if (res && res.data && res.data.EC === 0) {
                state.listDataReviewOption = res.data.DT
            }

            state.isLoading = false
        })
        builder.addCase(getListReviewOptions.rejected, (state, action) => {
            const res = action.payload

            if (res && res.data && res.data.EC !== 0) {
                state.isError = true
                toast.error(res.data.EM)
            }

        })
        builder.addCase(getPercentageStar.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getPercentageStar.fulfilled, (state, action) => {
            const res = action.payload

            if (res && res.data && res.data.EC === 0) {
                state.listDataPercentageStar = res.data.DT
            }

            state.isLoading = false
        })
        builder.addCase(getPercentageStar.rejected, (state, action) => {
            const res = action.payload

            if (res && res.data && res.data.EC !== 0) {
                state.isError = true
                toast.error(res.data.EM)
            }

        })
        builder.addCase(getPercentageOption.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getPercentageOption.fulfilled, (state, action) => {
            const res = action.payload

            if (res && res.data && res.data.EC === 0) {
                state.listDataPercentageOption = res.data.DT
            }

            state.isLoading = false
        })
        builder.addCase(getPercentageOption.rejected, (state, action) => {
            const res = action.payload

            if (res && res.data && res.data.EC !== 0) {
                state.isError = true
                toast.error(res.data.EM)
            }

        })
        builder.addCase(getAvgAndNumberOption.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getAvgAndNumberOption.fulfilled, (state, action) => {
            const res = action.payload

            if (res && res.data && res.data.EC === 0) {
                state.listDataAvgNumberStar = res.data.DT
            }

            state.isLoading = false
        })
        builder.addCase(getAvgAndNumberOption.rejected, (state, action) => {
            const res = action.payload

            if (res && res.data && res.data.EC !== 0) {
                state.isError = true
                toast.error(res.data.EM)
            }

        })
    }
})

export default userSlice.reducer