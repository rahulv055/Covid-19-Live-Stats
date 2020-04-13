import React,{Suspense} from "react";
const Globalstats = React.lazy(() => import("../Components/LeftPane/Globalstats.jsx"));
import CountriesComponent from "../Components/CountriesComponent/CountriesComponent.jsx";
import './Home.css';

class Home extends React.Component {

    render() {
        return (
            <div className="home_container">
                <Suspense fallback={<div style={{ textAlign: 'center' }}>....Loading</div>}>
                    <Globalstats />
                </Suspense>
                <CountriesComponent />
            </div>
        );
    }
}

export default Home;