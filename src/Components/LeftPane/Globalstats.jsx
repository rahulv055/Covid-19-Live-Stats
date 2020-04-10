import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getGlobalStats } from "../../redux/Global/global.actions.js";
import './Globalstats.css';

const Globalstats = ({ globalStats, getGlobalStat }) => {

    useEffect(() => {
        getGlobalStat();
    }, []);


    return (
        <div className="globalstats-container">
            <h2>GLOBAL STATS</h2>
            <div className="globalstats-details">
                <div className="global-data" style={{ color: 'rgb(0, 0, 230)' }}>
                    <label>Confirmed:</label>
                    <span> {globalStats.cases}</span>
                </div>
                <div className="global-data" style={{ color: 'rgb(255, 26, 26)' }}>
                    <label>Active:</label>
                    <span> {globalStats.active}</span>
                </div>
                <div className="global-data" style={{ color: 'rgb(0, 179, 0)' }}>
                    <label>Recovered:</label>
                    <span> {globalStats.recovered}</span>
                </div>
                <div className="global-data">
                    <label>Deaths:</label>
                    <span> {globalStats.deaths}</span>
                </div>
                <div className="today-cases">
                    <h3>Today New Cases</h3>
                    <div className="today-new-cases" >
                        <label>Today Cases:</label>
                        <span> +{globalStats.todayCases}</span>
                    </div>
                    <div className="today-new-cases today-death-cases">
                        <label>Today Deaths:</label>
                        <span> +{globalStats.todayDeaths}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    globalStats: state.globalReducer.globalStats
})

const mapDispatchToProps = dispatch => ({
    getGlobalStat: () => dispatch(getGlobalStats())
})

export default connect(mapStateToProps, mapDispatchToProps)(Globalstats);