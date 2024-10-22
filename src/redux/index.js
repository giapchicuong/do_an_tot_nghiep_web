import { configureStore } from "@reduxjs/toolkit";
import authReducer from './reduces/auth.reducer'
import userReducer from './reduces/user.reducer'
import groupReducer from './reduces/group.reducer'
import roleReducer from './reduces/role.reducer'
import ratingLevelReducer from './reduces/ratingLevel.reducer'
import userStatusLevelReducer from './reduces/userStatusLevel.reducer'
import { thunk } from "redux-thunk";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: userReducer,
        groups: groupReducer,
        roles: roleReducer,
        ratingLevels: ratingLevelReducer,
        userStatusLevels: userStatusLevelReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})