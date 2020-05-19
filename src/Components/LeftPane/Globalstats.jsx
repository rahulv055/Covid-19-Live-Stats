import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getGlobalStats } from "../../redux/Global/global.actions.js";
import GeneralStats from './GeneralStats.jsx'
import './Globalstats.css';

const Globalstats = ({ globalStats, getGlobalStat }) => {

    useEffect(() => {
        getGlobalStat();
    }, []);


    return (
        <div className="globalstats-container">
            <h2>GLOBAL STATS</h2>
            <GeneralStats generalStats={globalStats} />
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