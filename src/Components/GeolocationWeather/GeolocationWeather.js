import React from 'react'

export const GeolocationWeather = React.memo(({ geolocation, weather, dates }) => {
    return (
        <>
            <h1>{geolocation.city}, {geolocation.country}</h1>
            <h4>{dates}</h4>

            {JSON.stringify(weather) !== '{}' && (<>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}/>
                <div>{weather.main.temp}°C</div>
                <div>{weather.weather[0].description}</div>
                <div>Atmospheric pressure: {weather.main.pressure}hPa</div>
                <div>Humidity: {weather.main.humidity}%</div>
                <div>Wind speed: {weather.wind.speed}m/s</div>
                <div>Cloudiness: {weather.clouds.all}%</div>
            </>)}
        </>
    )
});