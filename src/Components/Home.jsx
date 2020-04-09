import React from "react";
import Searchbar from "./SearchBar/Searchbar.jsx";


class Home extends React.Component {

    render() {
        return (
            <div className="home_container">
                <Searchbar />
            </div>
        );
    }
}

export default Home;