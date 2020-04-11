import { combineReducers } from "redux";

import globalReducer from "./Global/global-reducer.js";
import CountriesReducer from "./CountriesReducer/CountriesReducer.js";


const rootReducer = combineReducers({
    globalReducer: globalReducer,
    CountriesReducer:CountriesReducer
});

export default rootReducer;