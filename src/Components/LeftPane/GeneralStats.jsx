import React from 'react';
import PropTypes from 'prop-types'

const GeneralStats = ({ generalStats }) => {
    return (
        <div className="globalstats-details">
            <div className="global-data" style={{ color: 'rgb(0, 0, 230)' }}>
                <label>Confirmed:</label>
                <span> {generalStats.cases}</span>
            </div>
            <div className="global-data" style={{ color: 'rgb(255, 26, 26)' }}>
                <label>Active:</label>
                <span> {generalStats.active}</span>
            </div>
            <div className="global-data" style={{ color: 'rgb(0, 179, 0)' }}>
                <label>Recovered:</label>
                <span> {generalStats.recovered}</span>
            </div>
            <div className="global-data">
                <label>Deaths:</label>
                <span> {generalStats.deaths}</span>
            </div>
            <div className="today-cases">
                <h3>Today New Cases</h3>
                <div className="today-new-cases" >
                    <label>Today Cases:</label>
                    <span> +{generalStats.todayCases}</span>
                </div>
                <div className="today-new-cases today-death-cases">
                    <label>Today Deaths:</label>
                    <span> +{generalStats.todayDeaths}</span>
                </div>
            </div>
        </div>
    )
}

GeneralStats.propTypes = {
    generalStats: PropTypes.object
}


export default GeneralStats;
