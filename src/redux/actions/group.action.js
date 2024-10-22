import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../utils/apis";

export const getAllGroup = createAsyncThunk('groups/getAllGroup',

    async () => {
        const response = await get('/groups/read')

        return response
    }
)

export const createNewGroup = createAsyncThunk('groups/createNewGroup',

    async (data) => {
        const response = await get('/groups/create', data)

        return response
    }
)


export const updatedGroup = createAsyncThunk('groups/updateGroup',

    async (data) => {
        const response = await get('/groups/update', data)

        return response
    }
)