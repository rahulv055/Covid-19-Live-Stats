import React from 'react';
import './CustomSelect.css';

const CustomSelect = (props) => {
    const { onChangeCountry, listOfCountries } = props;

    return (
        <div className="search_bar">
            <select className="select_input" onChange={onChangeCountry}>
                <option value="">Worldwide</option>
                {
                    listOfCountries.map(country =>
                        <option key={country} value={country}>
                            {country}
                        </option>
                    )
                }
            </select>
        </div>
    )
}

export default CustomSelect;