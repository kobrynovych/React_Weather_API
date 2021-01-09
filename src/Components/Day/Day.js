import React from 'react';
import { useParams } from 'react-router-dom';
import classes from './../SearchWeather/SearchWeather.module.css';

export default function Day({searchArr, newDays}) {

    const { id } = useParams();
    const num =  newDays[0].indexOf(id)

    return (
        <div className={classes.days}>
            {searchArr[num].map((el2, index2) => (<div key={String(index2)} className={classes.dayWrapper}>
                    <div className={classes.dayTitle}>{el2.dt_txt}</div>
                    <div className={classes.dayTitle}>{el2.main.temp}°C</div>
                    <img src={`http://openweathermap.org/img/wn/${el2.weather[0].icon}@4x.png`}/>
                    <div className={classes.padding}>{el2.weather[0].description}</div>
                    <div className={classes.padding}>Atmospheric pressure: {el2.main.pressure}hPa</div>
                    <div className={classes.padding}>Humidity: {el2.main.humidity}%</div>
                    <div className={classes.padding}>Wind speed: {el2.wind.speed}m/s</div>
                    <div className={classes.padding2}>Cloudiness: {el2.clouds.all}%</div>
            </div>))}
        </div>
    )
}
