import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import './Countries.css';
import Searchbar from '../SearchBar/Searchbar.jsx';
import CountryItem from "../Country-item/Country-item.jsx";
import { getCovidDataForAllCountries, getCovidDataForSpecificCountry } from "../../redux/CountriesReducer/Countries.action.js";

const CountriesComponent = ({ covid19AllCountries, getCovidDataForAllCountries, getCovidDataForSpecificCountry }) => {

    const [country, setCountry] = useState('');

    useEffect(() => {
        getCovidDataForAllCountries();
    }, []);

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
            getCovidDataForSpecificCountry(country);
    }

    return (
        <div className="countries-stats-container">
            <Searchbar type="text" placeholder="Enter the Country" value={country} onChangeCountry={(e) => onChangeCountry(e)} />
            <div className="countries-page">
                <h2 className="heading"> Countries Affected with COVID-19 </h2>
                <div className="items">
                    {
                        covid19AllCountries.map((covidCountryData, index) => (
                            <CountryItem key={index} covidCountryData={covidCountryData} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    covid19AllCountries: state.CountriesReducer.covid19AllCountries
})

const mapDispatchToProps = dispatch => ({
    getCovidDataForAllCountries: () => dispatch(getCovidDataForAllCountries()),
    getCovidDataForSpecificCountry: (country) => dispatch(getCovidDataForSpecificCountry(country))

})

export default connect(mapStateToProps, mapDispatchToProps)(CountriesComponent);
