import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getProfileInfo = createAsyncThunk (
    'info', 
    async (data, {rejectWithValue}) => {
        const token = localStorage.getItem('token');
        try{
        const info = await axios.get('https://gateway.scan-interfax.ru/api/v1/account/info',
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }
          }
          
          )
        return info.data

        }catch(error){
            if (error.response && error.response.data.message) {
             return   rejectWithValue(error.response.data.message)
            }else {
                return rejectWithValue(error.message)
            }
    }
    }

)




//import { createAsyncThunk } from "@reduxjs/toolkit";
//import axios from 'axios';

//export const getProfileInfo = createAsyncThunk (
 //   'info', 
 //   async function () {
 //       const token = localStorage.getItem('token');

 //       const response = await fetch('https://gateway.scan-interfax.ru/api/v1/account/info',
  //      {
 //         method: "GET",
  //        headers: {
  //            Accept: "application/json",
  //            "Content-Type": "application/json",
  //            Authorization: `Bearer ${token}`,
   //       },
          
  //    })
  //    const data = await response.json();
  //    return data
          
//  }
//)