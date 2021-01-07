import React from 'react';
import { weatherFetch } from '../api/api';
import { setIsLoading_ActionCreater, setErrorMess_ActionCreater, setErrorMessSearch_ActionCreater } from './errorMess_reducer';

const SET_WEATHER = 'SET_WEATHER';
const SET_WEATHER_SEARCH = 'SET_WEATHER_SEARCH';

const initialState = {
    weather: {},
    weatherSearch: {},
};

const weather_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state, weather: action.payload
            };
        case SET_WEATHER_SEARCH:
            return {
                ...state, weatherSearch: action.payload
            };
        default:
            return state;
    }
}

export default weather_reducer;

export const setWeather_ActionCreater = (payload) => ({type: SET_WEATHER, payload});
export const setWeatherSearch_ActionCreater = (payload) => ({type: SET_WEATHER_SEARCH, payload});


export const setWeatherThunk = (city) => async (dispatch) => {

    const city2 = (city === 'Novyy Rozdil') ? 'Lviv' : city;
    const cityURL = city2.replace(/\s/g, '-'); 

    dispatch(setIsLoading_ActionCreater());

    try {
        const response = await weatherFetch.geolocation(cityURL);
        
        if (response.data.cod === 200) {
           dispatch(setWeather_ActionCreater(response.data));
           dispatch(setErrorMess_ActionCreater(null));
        } else {
           dispatch(setWeather_ActionCreater({}));
           dispatch(setErrorMess_ActionCreater(response.data.message));
        }
        
    } catch(error) {
        dispatch(setWeather_ActionCreater({}));
        dispatch(setErrorMess_ActionCreater(error.response.data.message));
    }

    dispatch(setIsLoading_ActionCreater());
}

export const setWeatherSearchThunk = (city, lat, lon) => async (dispatch) => {

    const cityURL = city.replace(/\s/g, '-'); 

    dispatch(setIsLoading_ActionCreater());

    try {
        const response = await weatherFetch.search(cityURL, lat, lon);
        debugger
        if (response.data.cod === '200') {
           dispatch(setWeatherSearch_ActionCreater(response.data));
           dispatch(setErrorMessSearch_ActionCreater(null));
        } else {
           dispatch(setWeatherSearch_ActionCreater({}));
           dispatch(setErrorMessSearch_ActionCreater(response.data.message));
        }
        
    } catch(error) {
        dispatch(setWeatherSearch_ActionCreater({}));
        dispatch(setErrorMessSearch_ActionCreater(error.response.data.message));
    }

    dispatch(setIsLoading_ActionCreater());
}

