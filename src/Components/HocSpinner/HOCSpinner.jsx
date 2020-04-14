import React from 'react';
import './HOCSpinner.css'

const HocSpinner = WrappedComponent => ({ isLoading, covid19AllCountries }) => {
    return (
        isLoading ?
            (<div className="loader">

            </div>)
            :
            (<WrappedComponent covid19AllCountries={covid19AllCountries} />)
    )
}

export default HocSpinner;
