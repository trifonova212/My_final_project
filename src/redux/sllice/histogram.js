import { createSlice } from "@reduxjs/toolkit"
import { getHistogram } from "../thunk/histogram"

const initialState = {
    histogram: [], 
}

export const histogramSlice = createSlice( {
    name: 'histogram',
    initialState,
    reducers: {},
        extraReducers: (builder) => {
            builder.addCase(getHistogram.fulfilled, (state, action)=>{
            state.histogram = action.payload
            })
        }
})


export default histogramSlice.reducer