import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { getAllRatingLevel } from "../actions/ratingLevel.action"

const initialState = {
    isLoading: false,
    isError: false,
    listData: []
}

const userSlice = createSlice({
    name: 'rating-levels',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getAllRatingLevel.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getAllRatingLevel.fulfilled, (state, action) => {
            const res = action.payload

            if (res && res.data && res.data.EC === 0) {
                state.listData = res.data.DT
            }

            state.isLoading = false
        })
        builder.addCase(getAllRatingLevel.rejected, (state, action) => {
            const res = action.payload

            if (res && res.data && res.data.EC !== 0) {
                state.isError = true
                toast.error(res.data.EM)
            }

        })
    }
})

export default userSlice.reducer