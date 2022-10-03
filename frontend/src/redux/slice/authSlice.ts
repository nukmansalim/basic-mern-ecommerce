import { createSlice } from "@reduxjs/toolkit";
interface IAuth {
    value: object
}

const initialState = {
    value: {}
} as IAuth

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => { state.value = action.payload }
    }
})
const { reducer, actions } = authSlice
export const { login } = actions
export default reducer