import React from 'react';
import { geolocationFetch } from './../api/api';

const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_GEOLOCATION = 'SET_GEOLOCATION';
const SET_GEOLOCATION_ERROR_MESS = 'SET_GEOLOCATION_ERROR_MESS';


const initialState = {
    isLoading: false,
    geolocation: [],
    error: null,
};

const weather_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_LOADING:
            return {
                ...state, isLoading: !state.isLoading
            };
        case SET_GEOLOCATION:
            return {
                ...state, geolocation: action.payload
            };
        case SET_GEOLOCATION_ERROR_MESS:
            return {
                ...state, error: action.payload
            };
        default:
            return state;
    }
}

export default weather_reducer;

export const setIsLoading_ActionCreater = () => ({type: SET_IS_LOADING});
export const setGeolocation_ActionCreater = (payload) => ({type: SET_GEOLOCATION, payload});
export const setGeolocationErrorMess_ActionCreater = (payload) => ({type: SET_GEOLOCATION_ERROR_MESS, payload});


export const setGeolocationThunk = () => async (dispatch) => {
    debugger
    dispatch(setIsLoading_ActionCreater());

    try {
        const response = await geolocationFetch();

        if (response.data.status === "success") {
           dispatch(setGeolocation_ActionCreater(response.data));
           dispatch(setGeolocationErrorMess_ActionCreater(null));
        } else {
           dispatch(setGeolocationErrorMess_ActionCreater(response.data.message));
        }

    } catch(err) {
        dispatch(setGeolocationErrorMess_ActionCreater(err));
    }

    dispatch(setIsLoading_ActionCreater());
}