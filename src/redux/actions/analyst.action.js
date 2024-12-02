import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, post } from "../../utils/apis";



export const getPercentageStar = createAsyncThunk('dashboard/getPercentageStar',

    async (data) => {
        const response = await post('/dashboard/getPercentageStar', data)

        return response
    }
)

export const getPercentageOption = createAsyncThunk('dashboard/getPercentageOption',

    async (data) => {
        const response = await post('/dashboard/getPercentageOption', data)

        return response
    }
)


export const getAvgAndNumberOption = createAsyncThunk('dashboard/getAvgAndNumberOption',

    async (data) => {
        const response = await post('/dashboard/getAvgStarAndTotalOptionByDate', data)

        return response
    }
)
