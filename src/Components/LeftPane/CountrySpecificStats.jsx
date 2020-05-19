import React, { useContext } from 'react';


import { CountryContext } from '../../Context/CountryContext.js'
import GeneralStats from './GeneralStats.jsx'
import './Globalstats.css'

const CountrySpecificStats = () => {
    const { countryStats } = useContext(CountryContext);
    const { countryInfo: { flag } } = countryStats;
    return (
        <div className="globalstats-container">
            <div className="flag-title">
                <img src={flag} alt="flag" />
                <h2>INDIAN STATS</h2>
            </div>
            <GeneralStats generalStats={countryStats} />
        </div>
    )
}

export default CountrySpecificStats
