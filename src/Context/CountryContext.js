import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

import CountryDetailReducer from "../redux/CountryReducer/CountryDetailReducer.js";
import { setCountryCovidDetails } from '../redux/CountryReducer/CountryDetails.action.js'


const INITIAL_STATE = {
    countryStats: {
        countryInfo: {
            flag:""
        }
    },
    country: 'INDIA'
}
export const CountryContext = createContext();


export const CountryProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CountryDetailReducer, INITIAL_STATE)

    const getCovidDataForCountry = async () => {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        };
        await axios.get(`https://disease.sh/v3/covid-19/countries/${state.country}`, config)
            .then(({ data }) => {
                dispatch(setCountryCovidDetails(data))
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        getCovidDataForCountry();
    }, [])

    return (
        <CountryContext.Provider value={{
            ...state,
            getCovidDataForCountry
        }}>
            {children}
        </CountryContext.Provider>
    )
}