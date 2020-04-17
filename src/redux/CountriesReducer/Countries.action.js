import axios from 'axios';


export const getCovidDataForAllCountries = () => {
    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    };
    return async (dispatch) => {
        dispatch({type:'LOADING',payload:true})
        await axios.get('https://corona.lmao.ninja/v2/countries', config)
            .then(({ data }) => {
                console.log(Array.isArray(data));
                dispatch(setCovidDataForAllCountries(data));
                dispatch(getlistOfAllCountries());
                dispatch({type:'LOADING',payload:false})
            }).catch(error => {
                console.log(error);
            })
    }

}

export const getCovidDataForSpecificCountry = (country) => {
    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    };

    return async dispatch => {
        await axios.get(`https://corona.lmao.ninja/v2/countries/${country}` , config)
            .then(({ data }) => {
                console.log(data);
                console.log(country);
                dispatch(setCovidDataForSpecificCountry([data]))
            }).catch(error => {
                console.log(error);
            })
    }
}

export const setCovidDataForSpecificCountry = data => {
    return {
        type: 'SET_COUNTRY_COVID_DATA',
        payload: data
    }
}

const setCovidDataForAllCountries = data => {
    return {
        type: 'GET_ALL_COUNTRIES_COVID_DATA',
        payload: data
    }
}

const getlistOfAllCountries = ()=>{
    return {
        type: 'GET_LIST_OF_COUNTRIES'
    }
}