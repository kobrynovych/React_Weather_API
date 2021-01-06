import React, {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { setGeolocationThunk } from './../../Redux/weather_reducer';

export default function Home() {
    const dispatch = useDispatch();
    const geolocation = useSelector(state => state.weather.geolocation);
    const geolocation_error_mess = useSelector(state => state.weather.error);
        
    useEffect(() => {
        if (geolocation.length === 0) {
            dispatch(setGeolocationThunk());
        }
      }, [])

    return (
        <div>
            home
            {geolocation_error_mess ? (<h3>{geolocation_error_mess}</h3>) : (<>
                <h1>{geolocation.city}</h1>
                <h1>{geolocation.country}</h1>
                <h1>{geolocation.lat}</h1>
                <h1>{geolocation.lon}</h1>
                <h1>{geolocation.regionName}</h1>
                <h1>{geolocation.status}</h1>
            </>)}
        </div>
    )
}
