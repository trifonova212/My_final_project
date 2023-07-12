import { createSlice } from "@reduxjs/toolkit"
import { getObjectSearch } from "../thunk/objectSearch"

const initialState = {
    objectSearch: [], 
}
export const objectSearchSlice = createSlice( {
    name: 'objectSearch',
    initialState,
    reducers: {},
        extraReducers: (builder) => {
            builder.addCase(getObjectSearch.fulfilled, (state, action)=>{
            state.objectSearch = action.payload
            })
        }
})

export default objectSearchSlice.reducer