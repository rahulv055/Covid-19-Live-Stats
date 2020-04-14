import React, { useState, useEffect} from 'react';
import { connect } from "react-redux";
import './Countries.css';
import CustomSelect from '../CustomSelect/CustomSelect.jsx';
import CountriesContainer from '../CountriesContainer/CountriesContainer.jsx';
import HocSpinner from "../HocSpinner/HOCSpinner.jsx";
import { getCovidDataForAllCountries, getCovidDataForSpecificCountry } from "../../redux/CountriesReducer/Countries.action.js";

const CountriesContainerWithSpinner = HocSpinner(CountriesContainer);
const CountriesComponent = ({ covid19AllCountries, getCovidDataForAllCountries, getCovidDataForSpecificCountry, listOfCountries,isLoading }) => {

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
            <h2 className="heading"> Countries Affected with COVID-19 </h2>
            <CountriesContainerWithSpinner isLoading={isLoading} covid19AllCountries={covid19AllCountries} />
        </div>
    )
}

const mapStateToProps = state => ({
    covid19AllCountries: state.CountriesReducer.covid19AllCountries,
    listOfCountries: state.CountriesReducer.listOfCountries,
    isLoading:state.CountriesReducer.isLoading
})

const mapDispatchToProps = dispatch => ({
    getCovidDataForAllCountries: () => dispatch(getCovidDataForAllCountries()),
    getCovidDataForSpecificCountry: (country) => dispatch(getCovidDataForSpecificCountry(country))

})

export default connect(mapStateToProps, mapDispatchToProps)(CountriesComponent);
