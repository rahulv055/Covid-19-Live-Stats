import axios from 'axios';
import stateActionTypes from './State.types.js';

export const getCovidDataForAllState = () => {
    return {
        type: stateActionTypes.GET_COVID_DATA_STATE_WISE
    }
}


export const setCovidDataForAllState = (stateData) => {
    return {
        type: stateActionTypes.SET_COVID_DATA_STATE_WISE,
        payload: stateData
    }
}

export const getCasesTimeSeries = ()=>{
    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    };
    return async dispatch => {
        try {
            const response = await axios.get("http://localhost:8080/api/indiancasetimeseries", config);
            console.log(response);
            const caseTimeSeries = response?.data;
            console.log(caseTimeSeries);
            dispatch(setCasesTimeSeries(caseTimeSeries));
        }catch(error){
         console.log(error);
        }
    }
}

const setCasesTimeSeries = (data) =>{
    return {
        type: stateActionTypes.SET_CASES_TIME_SERIES,
        payload: data
    }
}


