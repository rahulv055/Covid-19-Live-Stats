
const CountryDetailReducer = (state, action) => {
    switch (action.type) {
        case 'GET_COUNTRY_COVID_DETAILS':
            return {
                ...state,
                countryStats: action.payload
            }
        default:
            return state;

    }

}

export default CountryDetailReducer;