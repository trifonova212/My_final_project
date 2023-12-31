import { createSlice } from "@reduxjs/toolkit"
import { loginUser } from "../thunk/auth"

const initialState = {
    user: {},
    isLogged: false
}

export const authSlice = createSlice( {
    name: 'auth',
    initialState,
    reducers: {
    },
        extraReducers: (builder) => {
            builder.addCase(loginUser.fulfilled, (state, action)=>{
                    state.user = action.payload;
                    state.isLogged = true;
                    localStorage.setItem('token', state.user.accessToken);
            })
        }
})


export default authSlice.reducer