import React from 'react';
import weather_reducer from './weather_reducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    weather: weather_reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store;