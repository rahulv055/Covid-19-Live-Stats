import axios from 'axios';


export const getCovidDataForAllCountries = () => {
    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    };
    return async (dispatch) => {
        await axios.get('https://corona.lmao.ninja/countries', config)
            .then(({ data }) => {
                dispatch(setCovidDataForAllCountries(data))
            }).catch(error => {
                console.log(error);
            })
    }

}


const setCovidDataForAllCountries = data => {
    return {
        type: 'GET_ALL_COUNTRIES_COVID_DATA',
        payload: data
    }
}