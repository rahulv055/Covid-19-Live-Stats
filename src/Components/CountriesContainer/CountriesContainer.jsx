import React from 'react';
import CountryItem from "../Country-item/Country-item.jsx";

const CountriesContainer = (props) => {

    const {covid19AllCountries} = props;
    return (
        <div className="countries-container">
            <div className="items">

                {
                    covid19AllCountries.map((covidCountryData, index) => (

                        <CountryItem key={index} covidCountryData={covidCountryData} />
                    ))
                }
            </div>
        </div>
    )
}

export default CountriesContainer;