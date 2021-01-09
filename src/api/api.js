import React from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
 
export const geolocationFetch = () => {
  return axios.get('http://ip-api.com/json/?fields=status,message,country,regionName,city,lat,lon')
}

export const weatherFetch = {
    geolocation(city) {
      return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    },
    search(city) {
      return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
    },
}

