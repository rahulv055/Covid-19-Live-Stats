import { combineReducers } from "redux";

import globalReducer from "./Global/global-reducer.js";


const rootReducer = combineReducers({
    globalReducer: globalReducer
});

export default rootReducer;