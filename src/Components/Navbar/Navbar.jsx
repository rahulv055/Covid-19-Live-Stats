import React from 'react';
import './Navbar.css';
import LiveLog from '../../assets/live.gif';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <label className="logo">
                <Link to="/">
                    COVID-19-LIVE
                </Link>
            </label>
            <img src={LiveLog} alt="live logo" />
            <span className="local-cases">
                <Link to="/indian-cases">
                    local cases
               </Link>
            </span>
        </nav>
    )
}

export default Navbar;