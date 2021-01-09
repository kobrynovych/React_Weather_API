import React from 'react'
import classes from './SearchWeather.module.css' 
import { NavLink, Route, Switch } from 'react-router-dom';
import Day from './../Day/Day';
import Card from './../Card/Card';

export const SearchWeather = React.memo(({ searchArr, searchCity, searchCountry, newDays }) => {
    return (
        <div className={classes.wrapper}>

            <h2 className={classes.title}>{searchCity}, {searchCountry}</h2>
            
            <div className={classes.days}>
                {searchArr.map((el, index) => (<NavLink key={String(index)} to={`/React_Weather_API/${newDays[0][index]}`} activeClassName={classes.active2} className={classes.navLink2}>
                 
                    <Card  dayTitle={classes.dayTitle}
                        newDays={newDays}
                        index={index}
                        el={el}
                        padding={classes.padding}
                        padding2={classes.padding2}
                    />
                  
                </NavLink>))}
            </div>

            <div className={classes.day}>
                <Switch>
                    <Route exact path={`/React_Weather_API/:id`}>
                        <Day searchArr={searchArr} newDays={newDays}/>
                    </Route>
                </Switch>
            </div>
                
        </div>
    )
});