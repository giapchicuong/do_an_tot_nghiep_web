import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../utils/apis";

export const getAllVersions = createAsyncThunk('versions/getAllVersions',

    async () => {
        const response = await get('/versionApp/read')

        return response
    }
)

export const createNewVersion = createAsyncThunk('versions/createMewVersion',

    async (data) => {
        const response = await get('/versionApp/create', data)

        return response
    }
)

