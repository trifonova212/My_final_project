import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getObjectSearch = createAsyncThunk (
    'objectSearch', 
    async (data, {rejectWithValue}) => {
        const token = localStorage.getItem('token');
        try{
        const objectSearch = await axios.post('https://gateway.scan-interfax.ru/api/v1/objectsearch',  
        {
            issueDateInterval: {
              startDate: data.startDate,
              endDate:  data.endDate
            },
            searchContext: {
              targetSearchEntitiesContext: {
                targetSearchEntities: [
                  {
                    type: "company",
                    sparkId: null,
                    entityId: null,
                    inn: data.inn,
                    maxFullness: data.maxFullness,
                    inBusinessNews: data.inBusinessNews
                  }
                ],
                onlyMainRole: data.onlyMainRole,
                tonality: data.tonality,
                onlyWithRiskFactors: data.onlyWithRiskFactors,
                riskFactors: {
                  and: [],
                  or: [],
                  not: []
                },
                themes: {
                  and: [],
                  or: [],
                  not: []
                }
              },
              themesFilter: {
                and: [],
                or: [],
                not: []
              }
            },
            searchArea: {
              includedSources: [],
              excludedSources: [],
              includedSourceGroups: [],
              excludedSourceGroups: []
            },
            attributeFilters: {
              excludeTechNews: data.isTechNews,
              excludeAnnouncements: data.isAnnouncement,
              excludeDigests: data.isDigest
            },
            similarMode: "duplicates",
            limit: data.limit,
            sortType: "sourceInfluence",
            sortDirectionType: "desc",
            intervalType: "month",
            histogramTypes: [
              'totalDocuments',
              'riskFactors'
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
        localStorage.setItem('objectSearch', JSON.stringify(objectSearch));
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

