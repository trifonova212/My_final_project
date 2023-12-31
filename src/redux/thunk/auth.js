import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const loginUser = createAsyncThunk (
    'login', 
    async (data, {rejectWithValue}) => {
        try{
        const user = await axios.post('https://gateway.scan-interfax.ru/api/v1/account/login', data)
        localStorage.setItem('token', user.data.accessToken)
        localStorage.setItem('expire', user.data.expire)
        return user.data
        }catch(error){
                if (error.response && error.response.data.message) {
                 return   rejectWithValue(error.response.data.message)
                }else {
                    return rejectWithValue(error.message)
                }
        }
    }

)