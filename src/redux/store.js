import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from './sllice/auth'
import  profileInfoSlice  from "./sllice/profileInfo";
import  documentSlice   from "./sllice/skanObject";
import  histogramSlice  from "./sllice/histogram";
import  objectSearchSlice  from "./sllice/objectSearch";

const store = configureStore({
    reducer: {
        auth: authSlice,
        document: documentSlice,
        info: profileInfoSlice,
        histogram: histogramSlice,
        objectSearch: objectSearchSlice
    }
    
})


export default store