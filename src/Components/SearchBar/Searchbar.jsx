import React from 'react';
import './Searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Searchbar = () => {
    return (
        <div className="search_bar">
            <input type="text" className="search_input" placeholder="Enter the Country"/>
            <FontAwesomeIcon icon={faSearch} size="2x" className="fa-search"/>
        </div>
    )
}

export default Searchbar;