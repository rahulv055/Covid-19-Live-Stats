import React, { useEffect } from 'react';
import './Globalstats.css';

const Globalstats = () => {
    return (
        <div className="globalstats-container">
            <h3>GLOBAL STATS</h3>
            <div className="globalstats-details">
                <div className="global-data" style={{color:'rgb(0, 0, 230)'}}>
                    <label>Confirmed:</label>
                    <span>1536677</span>
                </div>
                <div className="global-data" style={{color:'rgb(255, 26, 26)'}}>
                    <label>Active:</label>
                    <span>1536677</span>
                </div>
                <div className="global-data" style={{color:'rgb(0, 179, 0)'}}>
                    <label>Recovered:</label>
                    <span>1536677</span>
                </div>
                <div className="global-data">
                    <label>Deaths:</label>
                    <span>1536677</span>
                </div>
            </div>
        </div>
    )
}

export default Globalstats;