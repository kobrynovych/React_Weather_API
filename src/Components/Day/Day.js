import React from 'react'
import { useParams } from 'react-router-dom';

export default function Day({searchArr, newDays}) {

    const { id } = useParams();
    const num =  newDays[0].indexOf(id)

    return (
        <div>
            {searchArr[num].map((el2, index2) => (<div key={String(index2)}>
                    <div>{el2.dt}</div>
                    <div>{el2.dt_txt}</div>
                    <div>Імовірність опадів: {el2.pop}</div>
                    <div>Частина доби: {el2.sys.pod}</div>
                    <div>Швидкість вітру: {el2.wind.speed}m/s</div>
                    <div>{el2.weather[0].description}</div>
                    <img src={`http://openweathermap.org/img/wn/${el2.weather[0].icon}@4x.png`}/>
                    <div>{el2.main.temp}°C</div>
                    <div>Atmospheric pressure: {el2.main.pressure}hPa</div>
                    <div>Humidity: {el2.main.humidity}%</div>
                    <div>Cloudiness: {el2.clouds.all}%</div>
            </div>))}
        </div>
    )
}
