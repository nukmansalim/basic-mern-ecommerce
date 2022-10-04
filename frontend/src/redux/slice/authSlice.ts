import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    token: null,
}

const LoginbaseUrl = "http://localhost:8080/auth/login"


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null
        },
        login: (state, action) => {
            state.token = action.payload
        }
    }

})
export const { logout, login } = authSlice.actions
export default authSlice.reducer

