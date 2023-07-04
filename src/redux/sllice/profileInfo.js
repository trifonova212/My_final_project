import { createSlice } from "@reduxjs/toolkit"
import { getProfileInfo } from "../thunk/profileInfo"

const initialState = {
    info: [], 
    isLoading: false
}

export const profileInfoSlice = createSlice( {
    name: 'info',
    initialState,
    reducers: {},
        extraReducers: (builder) => {
            builder.addCase(getProfileInfo.pending, (state)=>{
            state.isLoading = true
            })
            builder.addCase(getProfileInfo.fulfilled, (state, action)=>{
            state.info = action.payload
            state.isLoading = false
            })
            builder.addCase(getProfileInfo.rejected, (state)=>{
                state.isLoading = false
                })
        }
})


export default profileInfoSlice.reducer