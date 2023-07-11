import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';



export const getSkanDocument = createAsyncThunk (

    'document', 
    async (objectSearch, {rejectWithValue}) => {
        const token = localStorage.getItem('token');
        try{
        const document = await axios.post('https://gateway.scan-interfax.ru/api/v1/documents',   {

                "ids": objectSearch.map((elem) =>
                elem.encodedId
                         
                )
        
            },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }
          }
          
          )
        localStorage.setItem('document', JSON.stringify(document));
        return document.data

        }catch(error){
            if (error.response && error.response.data.message) {
             return   rejectWithValue(error.response.data.message)
            }else {
                return rejectWithValue(error.message)
            }
    }
    }

)

