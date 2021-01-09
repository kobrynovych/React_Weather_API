import React from 'react'
import classes from './GeolocationWeather.module.css';
 
export const GeolocationWeather = React.memo(({ city, country, weather, dates }) => {
    return (
        <>
            <div className={classes.title}>
                <h1>{city}, {country.toUpperCase()}</h1>
                <h2>{dates}</h2>
            </div>
            
            {JSON.stringify(weather) !== '{}' && (<div className={classes.wrapper}>

                <div className={classes.left}>
                    <div className={classes.left_box}>
                        <img className={classes.img} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}/>
                        <div className={classes.temp}>{weather.main.temp}°C</div>
                        <div className={classes.description}>{weather.weather[0].description}</div>
                    </div>
                </div>

                <div className={classes.right}>
                    <div>Atmospheric pressure: <span>{weather.main.pressure}hPa</span></div>
                    <div>Humidity: <span>{weather.main.humidity}%</span></div>
                    <div>Wind speed: <span>{weather.wind.speed}m/s</span></div>
                    <div>Cloudiness: <span>{weather.clouds.all}%</span></div>
                </div>

            </div>)}
        </>
    )
});