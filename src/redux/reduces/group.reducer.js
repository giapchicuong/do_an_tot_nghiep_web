import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { getAllGroup } from "../actions/group.action"

const initialState = {
    isLoading: false,
    isError: false,
    listData: []
}

const userSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getAllGroup.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getAllGroup.fulfilled, (state, action) => {
            const res = action.payload

            if (res && res.data && res.data.EC === 0) {
                state.listData = res.data.DT
            }

            state.isLoading = false
        })
        builder.addCase(getAllGroup.rejected, (state, action) => {
            const res = action.payload

            if (res && res.data && res.data.EC !== 0) {
                state.isError = true
                toast.error(res.data.EM)
            }

        })
    }
})

export default userSlice.reducer