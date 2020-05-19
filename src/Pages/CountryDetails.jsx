import React from 'react';


import CountrySpecificStats from '../Components/LeftPane/CountrySpecificStats.jsx';
import CountryDetailComponent from '../Components/CountryDetailComponent/CountryDetail.component.jsx'
import { CountryProvider } from '../Context/CountryContext.js';
import './CountryDetails.css';


const CountryDetails = () => {
    return (
        <div className="country_details_container">
            <CountryProvider>
                <CountrySpecificStats />
                <CountryDetailComponent/>
            </CountryProvider>
        </div >
    )
}

export default CountryDetails;
