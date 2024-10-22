import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../utils/apis";

export const getAllUserStatusLevel = createAsyncThunk('userStatusLevel/getAllUserStatusLevel',

    async () => {
        const response = await get('/userStatusLevel/read')

        return response
    }
)