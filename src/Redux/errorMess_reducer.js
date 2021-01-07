import React from 'react';
import { weatherFetch } from '../api/api';

const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_ERROR_MESS = 'SET_ERROR_MESS';


const initialState = {
    isLoading: false,
    error: null,
};

const errorMess_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_LOADING:
            return {
                ...state, isLoading: !state.isLoading
            };
        case SET_ERROR_MESS:
            return {
                ...state, error: action.payload
            };
        default:
            return state;
    }
}

export default errorMess_reducer;

export const setIsLoading_ActionCreater = () => ({type: SET_IS_LOADING});
export const setErrorMess_ActionCreater = (payload) => ({type: SET_ERROR_MESS, payload});


// export const setWeatherThunk = (city, lat, lon) => async (dispatch) => {
//     const city = 'Lviv';
//     // dispatch(setIsLoading_ActionCreater());
//     const cityURL = city.replace(/\s/g, '-'); 
    
//     try {
//         const response = await weatherFetch.geolocation(cityURL, lat, lon);
//         debugger
// console.log(response);
//         // if (response.data.status === "success") {
//         if (response.data.cod === 200) {
//            dispatch(setGeolocation_ActionCreater(response.data));
//            dispatch(setGeolocationErrorMess_ActionCreater(null));
//         } else {
//            dispatch(setGeolocationErrorMess_ActionCreater(response.data.message));
//         }
        
//     } catch(err) {
//         // dispatch(setGeolocationErrorMess_ActionCreater(err));
//     }

//     // dispatch(setIsLoading_ActionCreater());
// }