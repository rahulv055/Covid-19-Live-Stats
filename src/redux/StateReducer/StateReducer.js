import stateActionTypes from './State.types.js'

const INITIAL_STATE = {
    stateData: [],
    // caseTimeSeries:[
    //     { 
    //         dailyCon
    //     }
    // ]
}


const StateReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case stateActionTypes.SET_COVID_DATA_STATE_WISE:
            return {
                ...state,
                stateData: action.payload
            }
        default:
            return state;
    }
}

export default StateReducer;