import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import stateActionTypes from './State.types.js';
import { setCovidDataForAllState } from './State.action.js'



export function* fetchCovidDataForIndianState() {
    const config = {
        headers: {
            "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
            "x-rapidapi-key": "93fe0acf66msh1f847d9908e03d7p16fe39jsn863ffaeea2ac",
        }
    }
    try {
        const response = yield axios.get('https://corona-virus-world-and-india-data.p.rapidapi.com/api_india', config);
        const data = yield response.data;
        console.log(Object.values(data.state_wise));
        const stateWiseData = yield call(parseObjectValue,Object.values(data.state_wise));
        yield put(setCovidDataForAllState(stateWiseData));
    } catch (error) {
        console.log(error)
    }
}

const parseObjectValue = (stateDatas) => {

    const parsedStateData = stateDatas.map(stateData => (
        {
            ...stateData,
            active: parseInt(stateData.active),
            confirmed: parseInt(stateData.confirmed),
            deaths: parseInt(stateData.deaths),
            recovered: parseInt(stateData.recovered),
        }
    ))

    return parsedStateData;
}




export function* stateSaga() {
    yield takeLatest(stateActionTypes.GET_COVID_DATA_STATE_WISE, fetchCovidDataForIndianState)
}