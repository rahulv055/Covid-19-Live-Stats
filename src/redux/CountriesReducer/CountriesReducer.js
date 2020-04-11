const INITIAL_STATE = {
    covid19AllCountries: []
}

const CountriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_ALL_COUNTRIES_COVID_DATA':
            return {
                ...state,
                covid19AllCountries: action.payload
            }
        default:
            return state;
    }

}

export default CountriesReducer;