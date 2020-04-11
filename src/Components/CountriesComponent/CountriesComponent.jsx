import React, { useEffect } from 'react';
import { connect } from "react-redux";
import './Countries.css';
import Searchbar from '../SearchBar/Searchbar.jsx';
import CountryItem from "../Country-item/Country-item.jsx";
import { getCovidDataForAllCountries } from "../../redux/CountriesReducer/Countries.action.js";

const CountriesComponent = ({ covid19AllCountries, getCovidDataForAllCountries }) => {

    useEffect(() => {
        getCovidDataForAllCountries();
    }, [])

    return (
        <div className="countries-stats-container">
            <Searchbar />
            <div className="countries-page">
                <h2 className="heading"> Countries Affected with COVID-19 </h2>
                <div className="items">
                    {
                        covid19AllCountries.map(covidCountryData => (
                            <CountryItem key={covidCountryData.countryInfo._id} covidCountryData={covidCountryData} />
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
    getCovidDataForAllCountries: () => dispatch(getCovidDataForAllCountries())
})

export default connect(mapStateToProps, mapDispatchToProps)(CountriesComponent);
