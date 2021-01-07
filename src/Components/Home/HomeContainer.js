import React, {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { setGeolocationThunk } from '../../Redux/geolocation_reducer';
import { setWeatherThunk } from '../../Redux/weather_reducer';
import Spinner from '../Spinner/Spinner';
import { GeolocationWeather } from '../GeolocationWeather/GeolocationWeather';

export default function HomeContainer() {
    const geolocation = useSelector(state => state.geolocation);
    const weather = useSelector(state => state.weather.weather);
    const isLoading = useSelector(state => state.errorMess.isLoading)
    const error_mess = useSelector(state => state.errorMess.error);
// debugger
    const dispatch = useDispatch();
         
    useEffect(() => {
        if (geolocation.city.length === 0) {
            dispatch(setGeolocationThunk());
        }
    }, [])

    useEffect(() => {
        dispatch(setWeatherThunk (geolocation.city, geolocation.lat, geolocation.lon));
    }, [geolocation.city])



    const handleClick = () => {
        dispatch(setWeatherThunk (geolocation.city, geolocation.lat, geolocation.lon));
    }

    return (
        <div>
            home
            <div>Ivano-Frankivsk</div>
            <div>City name, state code and country code divided by comma, use ISO 3166 country codes.
                You can specify the parameter not only in English. In this case, the API response should be returned in 
                the same language as the language of requested location name if the location is in our predefined list
                of more than 200,000 locations.</div>
           
           
            {isLoading ? <Spinner /> : (<React.Fragment>

                {error_mess && (<h3>{error_mess}</h3>)}
                
                {geolocation.city.length !== 0 && <GeolocationWeather geolocation={geolocation}
                    weather={weather}
                />}

                <br></br>
                
                <button onClick={handleClick}>Send</button>


                {JSON.stringify(weather) !== '{}' && (<>

                    <h1>{weather.name} - Назва міста</h1>
                    
                    <h1>{weather.weather[0].main} - Група параметрів погоди (дощ, сніг, екстремальний стан тощо)</h1>
                    <h1>{weather.weather[0].description} - Погодні умови в межах групи. Ви можете отримати вихід на своїй мові.</h1>
                    <h1>{weather.weather[0].icon} - Погода значок ідентифікатор</h1>

                    <h1>{weather.main.temp} - Температура.</h1>
                    <h1>{weather.main.feels_like} - Температура. Цей температурний параметр враховує сприйняття людиною погоди.</h1>
                    <h1>{weather.main.pressure} - Атмосферний тиск (на рівні моря, якщо немає даних про рівень моря або рівень моря)</h1>
                    <h1>{weather.main.humidity} - Вологість,%</h1>
                    <h1>{weather.main.temp_min} - Мінімальна температура на даний момент. Це мінімальна спостережувана температура в даний час (в межах великих мегаполісів та міських районів).</h1>
                    <h1>{weather.main.temp_max} - Максимальна температура на даний момент. Це максимальна температура, що спостерігається в даний час (у великих мегаполісах та міських районах)</h1>
                    {/* <h1>{weather.main.sea_level} - Атмосферний тиск на рівні моря, гПа</h1> */}
                    {/* <h1>{weather.main.grnd_level} - Атмосферний тиск на рівні землі, гПа</h1> */}
                
                    <h1>{weather.wind.speed} - Швидкість вітру. Одиниця за замовчуванням: метр / сек</h1>
                    <h1>{weather.clouds.all} - Хмарність,%</h1>
                </>)}
                <br></br>
            </React.Fragment>)}

            
        </div>
    )
}
