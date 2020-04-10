const INITIAL_STATE = {
    globalStats: {}
}

const globalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_GLOBAL_DATA':
            return {
                ...state,
                globalStats: action.payload
            }
        default:
            return state;
    }
}

export default globalReducer;