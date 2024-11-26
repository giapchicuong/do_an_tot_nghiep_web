import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { createNewVersion, getAllVersions, updateVersion } from "../actions/version.action"

const initialState = {
    isLoading: false,
    isError: false,
    listData: []
}

const userSlice = createSlice({
    name: 'versions',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getAllVersions.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getAllVersions.fulfilled, (state, action) => {
            const res = action.payload

            if (res && res.data && res.data.EC === 0) {
                state.listData = res.data.DT
            }

            state.isLoading = false
        })
        builder.addCase(getAllVersions.rejected, (state, action) => {
            const res = action.payload

            if (res && res.data && res.data.EC !== 0) {
                state.isError = true
                toast.error(res.data.EM)
            }

        })
        builder.addCase(createNewVersion.fulfilled, (state, action) => {
            const res = action.payload

            if (res && res.data && res.data.EC === 0) {
                state.listData = res.data.DT
            }

        })
        builder.addCase(updateVersion.fulfilled, (state, action) => {
            const res = action.payload

            if (res && res.data && res.data.EC === 0) {
                state.listData = res.data.DT
            }

        })
    }
})

export default userSlice.reducer