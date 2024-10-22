import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../utils/apis";

export const getAllUser = createAsyncThunk('users/getAllUser',

    async () => {
        const response = await get('/users/read')

        return response
    }
)

export const createNewUser = createAsyncThunk('users/createNewUser',

    async (data) => {
        const response = await get('/users/create', data)

        return response
    }
)


export const updatedUser = createAsyncThunk('users/updateUser',

    async (data) => {
        const response = await get('/users/update', data)

        return response
    }
)