import { combineReducers } from "redux";

import globalReducer from "./Global/global-reducer.js";
import CountriesReducer from "./CountriesReducer/CountriesReducer.js";
import StateReducer from "./StateReducer/StateReducer.js";

const rootReducer = combineReducers({
    globalReducer: globalReducer,
    CountriesReducer:CountriesReducer,
    StateReducer: StateReducer
});

export default rootReducer;