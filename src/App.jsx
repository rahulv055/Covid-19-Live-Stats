import React from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import './App.css';


const App = () => (
    <div className='app'>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </div>
)

export default App;