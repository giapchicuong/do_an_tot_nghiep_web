import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../utils/apis";

export const getAllRole = createAsyncThunk('roles/getAllRole',

    async () => {
        const response = await get('/roles/read')

        return response
    }
)

export const createNewRole = createAsyncThunk('roles/createNewRole',

    async (data) => {
        const response = await get('/roles/create', data)

        return response
    }
)


export const updatedRole = createAsyncThunk('roles/updateRole',

    async (data) => {
        const response = await get('/roles/update', data)

        return response
    }
)