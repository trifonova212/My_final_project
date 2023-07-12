import { createSlice } from "@reduxjs/toolkit"
import { getSkanDocument } from "../thunk/skanObject"

const initialState = {
    document: []
}

export const documentSlice = createSlice( {
    name: 'document',
    initialState,
    reducers: {},
        extraReducers: (builder) => {
            builder.addCase(getSkanDocument.fulfilled, (state, action)=>{
            state.document = action.payload
            })
        }
})

export default documentSlice.reducer