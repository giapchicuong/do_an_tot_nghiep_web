import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { getAllRole } from "../actions/role.action"

const initialState = {
    isLoading: false,
    isError: false,
    listData: []
}

const userSlice = createSlice({
    name: 'roles',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getAllRole.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getAllRole.fulfilled, (state, action) => {
            const res = action.payload

            if (res && res.EC === 0) {
                state.listData = res.DT
            }

            state.isLoading = false
        })
        builder.addCase(getAllRole.rejected, (state, action) => {
            const res = action.payload

            if (res && res.EC !== 0) {
                state.isError = true
                toast.error(res.data.EM)
            }

        })
    }
})

export default userSlice.reducer