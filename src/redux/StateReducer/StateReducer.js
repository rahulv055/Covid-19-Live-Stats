import stateActionTypes from './State.types.js'

const INITIAL_STATE = {
    stateData: [],
     caseTimeSeries:[]
}


const StateReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case stateActionTypes.SET_COVID_DATA_STATE_WISE:
            return {
                ...state,
                stateData: action.payload
            }
        case stateActionTypes.SET_CASES_TIME_SERIES:
            return{
                ...state,
                caseTimeSeries: action.payload
            }
        default:
            return state;
    }
}

export default StateReducer;