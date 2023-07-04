import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getSkanDocument = createAsyncThunk (
    'documents', 
    async (data, {rejectWithValue}) => {
        const token = localStorage.getItem('token');
        try{
        const document = await axios.post('https://gateway.scan-interfax.ru/api/v1/documents',   {
                "ids": [ '1:0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKnehLRnNC1KtGK0Ll9BWLigLo/HXXCrhw='
        ]
            },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }
          }
          
          )
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