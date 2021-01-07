import React from 'react';
import { geolocationFetch } from '../api/api';
import { setIsLoading_ActionCreater, setErrorMess_ActionCreater } from './errorMess_reducer';

const SET_CITY = 'SET_CITY';
const SET_COUNTRY = 'SET_COUNTRY';
const SET_LAT = 'SET_LAT';
const SET_LON = 'SET_LON';

const initialState = {
    city: "",
    country: "",
    lat: null,
    lon: null,
};

const geolocation_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY:
            return {
                ...state, city: action.payload
            };
        case SET_COUNTRY:
            return {
                ...state, country: action.payload
            };
        case SET_LAT:
            return {
                ...state, lat: action.payload
            };
        case SET_LON:
            return {
                ...state, lon: action.payload
            };
        default:
            return state;
    }
}

export default geolocation_reducer;


export const setCity_ActionCreater = (payload) => ({type: SET_CITY, payload});
export const setCountry_ActionCreater = (payload) => ({type: SET_COUNTRY, payload});
export const setLat_ActionCreater = (payload) => ({type: SET_LAT, payload});
export const setLon_ActionCreater = (payload) => ({type: SET_LON, payload});


export const setGeolocationThunk = () => async (dispatch) => {

    dispatch(setIsLoading_ActionCreater());

    try {
        const response = await geolocationFetch();

        if (response.data.status === "success") {

           dispatch(setCity_ActionCreater(response.data.city));
           dispatch(setCountry_ActionCreater(response.data.country));
           dispatch(setLat_ActionCreater(response.data.lat));
           dispatch(setLon_ActionCreater(response.data.lon));

           dispatch(setErrorMess_ActionCreater(null));
        } else {
           dispatch(setErrorMess_ActionCreater(response.data.message));
        }

    } catch(err) {
        dispatch(setErrorMess_ActionCreater(err));
    }

    dispatch(setIsLoading_ActionCreater());
}