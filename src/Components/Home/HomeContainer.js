import React, {useState, useEffect, useMemo} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { setGeolocationThunk } from '../../Redux/geolocation_reducer';
import { setWeatherThunk } from '../../Redux/weather_reducer';
import Spinner from '../Spinner/Spinner';
import { GeolocationWeather } from '../GeolocationWeather/GeolocationWeather';
import { setWeatherSearchThunk } from './../../Redux/weather_reducer';
import { SearchWeather } from '../SearchWeather/SearchWeather';

export default function HomeContainer() {

    const [search, setSearch] = useState('');

    const geolocation = useSelector(state => state.geolocation);
    const city = useSelector(state => state.geolocation.city);
    const country = useSelector(state => state.geolocation.country);

    const weather = useSelector(state => state.weather.weather);

    const searchArr = useSelector(state => state.weather.weatherSearch);
    const searchCity = useSelector(state => state.weather.city);
    const searchCountry = useSelector(state => state.weather.country);

    const isLoading = useSelector(state => state.errorMess.isLoading)
    const error_mess = useSelector(state => state.errorMess.error);
    const errorSearch = useSelector(state => state.errorMess.errorSearch);

    
    const dispatch = useDispatch();
         
    useEffect(() => {
        if (city.length === 0) {
            dispatch(setGeolocationThunk());
        }
    }, [])


    // const handleClick2 = React.useMemo(() => dispatch(setWeatherThunk(geolocation.city), [asd]));

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setWeatherSearchThunk(search));
    }

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Nocvember', 'December'];
    const date = new Date();
    const dates = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;

    return (
        <div>
          
            {isLoading ? <Spinner /> : (<React.Fragment>

                {error_mess && (<h3>{error_mess}</h3>)}
                
                {city.length !== 0 && <GeolocationWeather city={city}
                    country={country}
                    weather={weather}
                    dates={dates}        
                />}

                <br></br>
                
                <input onChange={handleChange} value={search} placeholder='Львів, Lviv, Kyiv, Ivano Frankivsk...' title='You can specify the City name not only in English. In list of more than 200,000 locations.'/>
                <button onClick={handleClick}>Send</button>

                {errorSearch && (<h3>{errorSearch}</h3>)}

                {searchArr.length !== 0  && <SearchWeather searchArr={searchArr} 
                    searchCity={searchCity}
                    searchCountry={searchCountry}
                    days={days}
                    date={date}
                />}

      

            </React.Fragment>)}

            
        </div>
    )
}
