import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <label className="logo">COVID-19-LIVE</label>
            <span className="local-cases">
                <Link to="/">
                    local cases
               </Link>
            </span>
        </nav>
    )
}

export default Navbar;