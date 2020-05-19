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