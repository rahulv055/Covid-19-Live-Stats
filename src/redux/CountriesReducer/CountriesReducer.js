const INITIAL_STATE = {
    covid19AllCountries: [],
    listOfCountries: []
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
                listOfCountries:state.covid19AllCountries.map(item=>item.country)
            }
        default:
            return state;
    }

}


// function updateCountries(covid19AllCountries,covid19Country) {
//     if (covid19AllCountries && covid19AllCountries.length > 0) {
//         var arr = [covid19Country];
//         return arr;
//     }else{

//     }
// }

export default CountriesReducer;