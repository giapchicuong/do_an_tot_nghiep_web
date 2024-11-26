import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, post, put } from "../../utils/apis";

export const getAllVersions = createAsyncThunk('versions/getAllVersions',

    async () => {
        const response = await get('/versionApp/read')

        return response
    }
)

export const createNewVersion = createAsyncThunk('versions/createMewVersion',

    async (data) => {
        const response = await post('/versionApp/create', data)

        return response
    }
)

export const updateVersion = createAsyncThunk('versions/updateVersion',

    async (data) => {
        const response = await put('/versionApp/update', data)

        return response
    }
)

