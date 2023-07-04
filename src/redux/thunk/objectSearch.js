import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getObjectSearch = createAsyncThunk (
    'objectSearch', 
    async (data, {rejectWithValue}) => {
        const token = localStorage.getItem('token');
        try{
        const objectSearch = await axios.post('https://gateway.scan-interfax.ru/api/v1/objectsearch',   
        {
            intervalType: "month",
            histogramTypes: ["totalDocuments", "riskFactors"],
            sortType: "issueDate",
            limit: 1000,
            sortDirectionType: "asc",
            similarMode: "none",
            issueDateInterval: {
                startDate: "2023-01-01T00:00:00+03:00",
                endDate: "2023-08-31T23:59:59+03:00",
            },
            attributeFilters: {
                excludeTechNews: true,
                excludeAnnouncements: true,
                excludeDigests: true,
            },
            searchContext: {
                targetSearchEntitiesContext: {
                    targetSearchEntities: [
                        {
                            type: "company",
                            sparkId: null,
                            entityId: null,
                            inn: data.searchContext.targetSearchEntitiesContext.targetSearchEntities.inn,
                            maxFullness: true,
                            inBusinessNews: null,
                        },
                    ],
                   onlyMainRole: true,
                    tonality: "any"  ,
                   onlyWithRiskFactors: false,
                },
            },
        },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }
          }
          
          )
        return objectSearch.data

        }catch(error){
            if (error.response && error.response.data.message) {
             return   rejectWithValue(error.response.data.message)
            }else {
                return rejectWithValue(error.message)
            }
    }
    }

)