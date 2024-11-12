import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, post } from "../../utils/apis";

export const getListButton = createAsyncThunk('dashboard/getListButton',

    async () => {
        const response = await get('/dashboard/getListTotal')

        return response
    }
)

export const getTotalStar = createAsyncThunk('dashboard/getTotalStar',

    async () => {
        const response = await get('/dashboard/getTotalStar')

        return response
    }
)


export const getListReviewOptions = createAsyncThunk('dashboard/listReviewOptions',

    async () => {
        const response = await get('/dashboard/listReviewOptions')

        return response
    }
)


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
        const response = await post('/dashboard/getAvgAndNumberOption', data)

        return response
    }
)
