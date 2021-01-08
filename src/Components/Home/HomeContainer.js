import React, {useState, useEffect, useMemo} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { setGeolocationThunk } from '../../Redux/geolocation_reducer';
import Spinner from '../Spinner/Spinner';
import { GeolocationWeather } from '../GeolocationWeather/GeolocationWeather';
import { setWeatherSearchThunk } from './../../Redux/weather_reducer';
import { SearchWeather } from '../SearchWeather/SearchWeather';
import { Alert } from './../Alert';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
        marginTop: theme.spacing(2),
        },
    },
}));


export default function HomeContainer() {

    const classes = useStyles();

    const [search, setSearch] = useState('');

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
        <div className={classes.root}>
          
            {isLoading ? <Spinner /> : (<>

                {error_mess && (<Alert severity="error">{error_mess}</Alert> )}
                  
                {city.length !== 0 && <GeolocationWeather city={city}
                    country={country}
                    weather={weather}
                    dates={dates}        
                />}

                <hr></hr>
                
                <input onChange={handleChange} value={search} placeholder='Львів, Lviv, Kyiv, Ivano Frankivsk...' title='You can specify the City name not only in English. In list of more than 200,000 locations.'/>
                <button onClick={handleClick}>Send</button>

                {errorSearch && (<h3><Alert severity="error">{errorSearch}</Alert></h3>)}

                {searchArr.length !== 0  && <SearchWeather searchArr={searchArr} 
                    searchCity={searchCity}
                    searchCountry={searchCountry}
                    days={days}
                    date={date}
                />}

            </>)}            
        </div>
    )
}
