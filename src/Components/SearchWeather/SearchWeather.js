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
        <div className={classes.wrapper}>

            <h2 className={classes.title}>{searchCity}, {searchCountry}</h2>
            
            <div className={classes.days}>
                {searchArr.map((el, index) => (<NavLink key={String(index)} to={`/Home/${newDays[0][index]}`} activeClassName={classes.active2} className={classes.navLink2}>
                    <div className={classes.dayTitle}>{newDays[0][index]}</div>
                    <div className={classes.dayTitle}>{el[0].main.temp}°C</div>
                    <img src={`http://openweathermap.org/img/wn/${el[0].weather[0].icon}@4x.png`}/>
                    <div className={classes.padding}>Humidity: {el[0].main.humidity}%</div>
                    <div className={classes.padding}>Cloudiness: {el[0].clouds.all}%</div>
                    <div className={classes.padding2}>Wind speed: {el[0].wind.speed}m/s</div>
                </NavLink>))}
            </div>

            <div className={classes.day}>
                <Switch>
                    <Route exact path={`/Home/:id`}>
                        <Day searchArr={searchArr} newDays={newDays}/>
                    </Route>
                </Switch>
            </div>
                
        </div>
    )
});