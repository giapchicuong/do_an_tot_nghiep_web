import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { getAllUser } from "../actions/user.action"

const initialState = {
    isLoading: false,
    isError: false,
    listData: []
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getAllUser.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getAllUser.fulfilled, (state, action) => {
            const res = action.payload

            if (res && res.data && res.data.EC === 0) {
                state.listData = res.data.DT
            }

            state.isLoading = false
        })
        builder.addCase(getAllUser.rejected, (state, action) => {
            const res = action.payload

            if (res && res.data && res.data.EC !== 0) {
                state.isError = true
                toast.error(res.data.EM)
            }

        })
    }
})

export default userSlice.reducer