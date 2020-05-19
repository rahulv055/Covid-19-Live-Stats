import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'

import { stateSaga } from './StateReducer/StateSaga.js';
import rootReducer from './root-reducer.js';


const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(stateSaga);

export default store;