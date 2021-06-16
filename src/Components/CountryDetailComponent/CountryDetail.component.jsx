import React from 'react';

import StateComponent from '../StateComponent/State.component.jsx';
import Chartgraph from '../Graph/Chart.jsx';
import './CountryDetailComponent.css';

const CountryDetailComponent = () => {
    return (
        <div className="country-detail-container">
            <StateComponent/>
            <Chartgraph/>
        </div>
    )
}

export default CountryDetailComponent;