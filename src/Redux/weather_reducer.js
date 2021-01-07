import React from 'react';
import { weatherFetch } from '../api/api';
import { setIsLoading_ActionCreater, setErrorMess_ActionCreater } from './errorMess_reducer';

const SET_WEATHER = 'SET_WEATHER';

const initialState = {
    weather: {},
};

const weather_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state, weather: action.payload
            };
        default:
            return state;
    }
}

export default weather_reducer;

export const setWeather_ActionCreater = (payload) => ({type: SET_WEATHER, payload});


export const setWeatherThunk = (city, lat, lon) => async (dispatch) => {

    const city = 'Ivano Frankivsk';
    const cityURL = city.replace(/\s/g, '-'); 

    dispatch(setIsLoading_ActionCreater());


    try {
        const response = await weatherFetch.geolocation(cityURL, lat, lon);
        
        if (response.data.cod === 200) {
           console.log(response.data);
           dispatch(setWeather_ActionCreater(response.data));
           dispatch(setErrorMess_ActionCreater(null));
        } else {
           dispatch(setErrorMess_ActionCreater(response.data.message));
        }
        
    } catch(error) {
        dispatch(setErrorMess_ActionCreater(error.response.data.message));
    }

    dispatch(setIsLoading_ActionCreater());
}