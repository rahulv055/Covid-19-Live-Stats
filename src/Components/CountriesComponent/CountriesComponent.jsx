import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import './Countries.css';
import CustomSelect from '../CustomSelect/CustomSelect.jsx';
import CountryItem from "../Country-item/Country-item.jsx";
import { getCovidDataForAllCountries, getCovidDataForSpecificCountry } from "../../redux/CountriesReducer/Countries.action.js";

const CountriesComponent = ({ covid19AllCountries, getCovidDataForAllCountries, getCovidDataForSpecificCountry, listOfCountries }) => {

    const [country, setCountry] = useState('');

    useEffect(() => {
        if (country === '') {
            getCovidDataForAllCountries();
        } else {
            getCovidDataForSpecificCountry(country);
        }
    }, [country]);

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    return (
        <div className="countries-stats-container">
            <CustomSelect onChangeCountry={(e) => onChangeCountry(e)} listOfCountries={listOfCountries} />
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
    covid19AllCountries: state.CountriesReducer.covid19AllCountries,
    listOfCountries: state.CountriesReducer.listOfCountries
})

const mapDispatchToProps = dispatch => ({
    getCovidDataForAllCountries: () => dispatch(getCovidDataForAllCountries()),
    getCovidDataForSpecificCountry: (country) => dispatch(getCovidDataForSpecificCountry(country))

})

export default connect(mapStateToProps, mapDispatchToProps)(CountriesComponent);
