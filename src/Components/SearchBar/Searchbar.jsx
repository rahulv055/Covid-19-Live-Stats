import React from 'react';
import './Searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Searchbar = (props) => {
    const { type, value, placeholder,onChangeCountry } = props;

    return (
        <div className="search_bar">
            <input className="search_input" type={type} value={value} placeholder={placeholder} onChange={onChangeCountry} />
            <FontAwesomeIcon icon={faSearch} size="2x" className="fa-search" />
        </div>
    )
}

export default Searchbar;