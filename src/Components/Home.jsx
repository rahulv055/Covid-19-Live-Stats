import React from "react";
import Globalstats from "./LeftPane/Globalstats.jsx";

class Home extends React.Component {

    render() {
        return (
            <div className="home_container">
               <Globalstats/>
            </div>
        );
    }
}

export default Home;