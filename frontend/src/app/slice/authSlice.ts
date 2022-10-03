import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"



const initialState = {
    auth: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<any>) => state.auth = action.payload,
        logout: (state) => void (state.auth)
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer