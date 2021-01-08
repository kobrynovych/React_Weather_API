import React from 'react'
import classes from './SearchWeather.module.css' 
import { NavLink, Route, Switch } from 'react-router-dom';
import Day from './../Day/Day';

export const SearchWeather = React.memo(({ searchArr, searchCity, searchCountry, days, date }) => {

    const startDay = date.getDay();
    const finishDay = startDay + searchArr.length;

    // створюю масив з днями з початком від сьогоднішнього дня
    const newDays = []
    newDays.push(days.slice(startDay, finishDay))


    return (
        <>

            <h3>{searchCity}, {searchCountry}</h3>
            
            <div>
                {searchArr.map((el, index) => (<NavLink key={String(index)} to={`/Home/${newDays[0][index]}`} activeClassName={classes.active2} className={classes.navLink2}>
                    <div>{newDays[0][index]}</div>
                    <img src={`http://openweathermap.org/img/wn/${el[0].weather[0].icon}@4x.png`}/>
                    <div>{el[0].main.temp}°C</div>
                    <div>Humidity: {el[0].main.humidity}%</div>
                    <div>Cloudiness: {el[0].clouds.all}%</div>
                    <div>Wind speed: {el[0].wind.speed}m/s</div>
                </NavLink>))}
            </div>



            <div>
                <Switch>
                    {/* {newDays[0].map((el, index) => (<div key={String(index)}> */}
                        <Route exact path={`/Home/:id`}>
                            <Day searchArr={searchArr} newDays={newDays}/>
                        </Route>
                    {/* </div>))} */}
                </Switch>
            </div>
                
        </>
    )
});