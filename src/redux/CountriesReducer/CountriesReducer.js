const INITIAL_STATE = {
    covid19AllCountries: [],
    searchCovidCountry:[]
}

const CountriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_ALL_COUNTRIES_COVID_DATA':
            return {
                ...state,
                covid19AllCountries: action.payload,
                searchCovidCountry:action.payload
            }

        case 'SET_COUNTRY_COVID_DATA':
            return {
                ...state,
                covid19AllCountries: state.searchCovidCountry.filter(item => {
                    const itemData = item.country.toUpperCase();
                    const textData = action.payload.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                })
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