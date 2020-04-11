import React from "react";
import Globalstats from "../Components/LeftPane/Globalstats.jsx";
import CountriesComponent from "../Components/CountriesComponent/CountriesComponent.jsx";
import './Home.css';

class Home extends React.Component {

    render() {
        return (
            <div className="home_container">
               <Globalstats/>
               <CountriesComponent/>
            </div>
        );
    }
}

export default Home;