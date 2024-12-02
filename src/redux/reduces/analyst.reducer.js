import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { getAvgAndNumberOption, getPercentageOption, getPercentageStar } from "../actions/analyst.action"

const initialState = {
    isLoadingPercentageStar: true,
    isLoadingPercentageOption: true,
    isLoadingAvgNumberStar: true,
    isError: false,
    listDataPercentageStar: [],
    listDataPercentageOption: [],
    listDataAvgNumberStar: [],
}

const userSlice = createSlice({
    name: 'analyst',
    initialState,
    reducers: {},

    extraReducers: (builder) => {

        builder.addCase(getPercentageStar.pending, (state, action) => {
            state.isLoadingPercentageStar = true
        })
        builder.addCase(getPercentageStar.fulfilled, (state, action) => {
            const res = action.payload

            if (res && res.EC === 0) {
                state.listDataPercentageStar = res.DT
            }

            state.isLoadingPercentageStar = false
        })
        builder.addCase(getPercentageStar.rejected, (state, action) => {
            const res = action.payload

            if (res && res.EC !== 0) {
                state.isError = true
                toast.error(res.EM)
            }

        })
        builder.addCase(getPercentageOption.pending, (state, action) => {
            state.isLoadingPercentageOption = true
        })
        builder.addCase(getPercentageOption.fulfilled, (state, action) => {
            const res = action.payload

            if (res && res.EC === 0) {
                state.listDataPercentageOption = res.DT
            }

            state.isLoadingPercentageOption = false
        })
        builder.addCase(getPercentageOption.rejected, (state, action) => {
            const res = action.payload

            if (res && res.EC !== 0) {
                state.isError = true
                toast.error(res.EM)
            }

        })
        builder.addCase(getAvgAndNumberOption.pending, (state, action) => {
            state.isLoadingAvgNumberStar = true
        })
        builder.addCase(getAvgAndNumberOption.fulfilled, (state, action) => {
            const res = action.payload

            if (res && res.EC === 0) {
                state.listDataAvgNumberStar = res.DT
            }

            state.isLoadingAvgNumberStar = false
        })
        builder.addCase(getAvgAndNumberOption.rejected, (state, action) => {
            const res = action.payload

            if (res && res.EC !== 0) {
                state.isError = true
                toast.error(res.EM)
            }

        })
    }
})

export default userSlice.reducer