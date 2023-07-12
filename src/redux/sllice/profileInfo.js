import { createSlice } from "@reduxjs/toolkit"
import { getProfileInfo } from "../thunk/profileInfo"

const initialState = {
    info: [], 
}

export const profileInfoSlice = createSlice( {
    name: 'info',
    initialState,
    reducers: {},
        extraReducers: (builder) => {
            builder.addCase(getProfileInfo.fulfilled, (state, action)=>{
            state.info = action.payload
            })
        }
})

export default profileInfoSlice.reducer