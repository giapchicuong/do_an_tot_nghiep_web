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
