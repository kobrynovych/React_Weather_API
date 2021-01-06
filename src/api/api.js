import React from 'react';
import axios from 'axios';

export const geolocationFetch = () => {
  debugger
  return axios.get('http://ip-api.com/json/?fields=status,message,country,regionName,city,lat,lon')
}