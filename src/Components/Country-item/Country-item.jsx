import React from 'react';
import './Country-item.css'

const CountryItem = ({ covidCountryData }) => {
    return (
        <>
            <div className="country-item">
                <div className="countries-flag-name">
                    <img src={covidCountryData.countryInfo.flag} alt="Avatar" style={{ width: '100%', height: '80%' }} />
                    <h4 style={{ padding: '10px', height: '20%' }}><b>{covidCountryData.country}</b></h4>
                </div>
                <div className="country-case-details">
                    <div className="countries-data" style={{ color: 'rgb(0, 0, 230)' }}>
                        <label>Confirmed:</label>
                        <span>{covidCountryData.cases}</span>
                    </div>
                    <div className="countries-data" style={{ color: 'rgb(255, 26, 26)' }}>
                        <label>Active:</label>
                        <span>{covidCountryData.active}</span>
                    </div>
                    <div className="countries-data" style={{ color: 'rgb(0, 179, 0)' }}>
                        <label>Recovered:</label>
                        <span>{covidCountryData.recovered}</span>
                    </div>
                    <div className="countries-data">
                        <label>Deaths:</label>
                        <span>{covidCountryData.deaths}</span>
                    </div>
                    <div className="countries-data">
                        <b> <label>Today Cases:</label>
                            <span> +{covidCountryData.todayCases}</span></b>
                    </div>
                    <div className="countries-data">
                        <b>  <label>Today Deaths:</label>
                            <span> +{covidCountryData.todayDeaths}</span>
                        </b>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CountryItem;
