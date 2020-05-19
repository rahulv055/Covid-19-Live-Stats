import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import EnhancedTable from '../StateTable/StateTableComponent.jsx';
import { getCovidDataForAllState } from '../../redux/StateReducer/State.action.js'
import './StateComponent.css'

const StateComponent = (props) => {
    const { covidDataforAllStates, getCovidDataForAllState } = props;

    useEffect(() => {
        getCovidDataForAllState();
    }, [getCovidDataForAllState]);

    console.log(covidDataforAllStates);

    return (
        <div className="state-container">
            <h3 className="state-wise-title">State Wise Cases</h3>
            <h3 className="state-wise-title">INDIA</h3>
            <EnhancedTable covidDataforAllStates={covidDataforAllStates}  />
        </div>
    )
}

const mapStateToProps = state => ({
    covidDataforAllStates: state.StateReducer.stateData
})

const mapDispatchToProps = dispatch => ({
    getCovidDataForAllState: () => dispatch(getCovidDataForAllState())
})

export default connect(mapStateToProps, mapDispatchToProps)(StateComponent);