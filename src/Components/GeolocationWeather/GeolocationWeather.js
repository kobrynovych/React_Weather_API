import React from 'react'

export const GeolocationWeather = React.memo(({ geolocation, weather }) => {
    return (
        <>
            <h1>{geolocation.city} - {geolocation.country}</h1>

            {JSON.stringify(weather) !== '{}' && (<>
                <h1>{weather.main.temp}°C - Temperature.</h1>
                <h1>{weather.weather[0].description}</h1>
                <h1>{weather.main.pressure}hPa - Atmospheric pressure.</h1>
                <h1>{weather.main.humidity}% - Humidity.</h1>
                <h1>{weather.wind.speed}m/s - Wind speed.</h1>
                <h1>{weather.clouds.all}% - Cloudiness.</h1>
            </>)}
        </>
    )
});