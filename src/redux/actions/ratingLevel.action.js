import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../utils/apis";

export const getAllRatingLevel = createAsyncThunk('rating-level/getAllRatingLevel',

    async () => {
        const response = await get('/ratingLevel/read')

        return response
    }
)

export const createNewRatingLevel = createAsyncThunk('rating-level/createNewRatingLevel',

    async (data) => {
        const response = await get('/ratingLevel/create', data)

        return response
    }
)


export const updatedRatingLevel = createAsyncThunk('rating-level/updateRatingLevel',

    async (data) => {
        const response = await get('/ratingLevel/update', data)

        return response
    }
)