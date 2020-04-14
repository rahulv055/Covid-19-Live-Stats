const INITIAL_STATE = {
    covid19AllCountries: [],
    listOfCountries: [],
    isLoading: true
}

const CountriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_ALL_COUNTRIES_COVID_DATA':
            return {
                ...state,
                covid19AllCountries: action.payload,
            }

        case 'SET_COUNTRY_COVID_DATA':
            return {
                ...state,
                covid19AllCountries: action.payload
            }
        case 'GET_LIST_OF_COUNTRIES':
            return {
                ...state,
                listOfCountries: state.covid19AllCountries.map(item => item.country)
            }
        case 'LOADING':
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }

}

export default CountriesReducer;