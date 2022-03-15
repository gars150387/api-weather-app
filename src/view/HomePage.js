import React, { useState } from 'react'
import {  AddCityWeather } from '../components/AddCityWeather'
import { GetWeatherCity  } from '../helper/GetWeatherCity'

export const HomePage = () =>{

    const [ cities, setCities] = useState([])


    //link to fetch: https://api.openweathermap.org/data/2.5/weather?appid=750f844a271e6a0e4d5caf0107a40189&q=miami

    return (
        <div id='bodyApp'>
            <h1 className='AppTitle'>Weather App</h1>
            <br/>

            {/* <h1>{ cities }</h1> */}
            <AddCityWeather setCities={ setCities } />
            <br/>

            {cities.map( city =>{
                return (
                    <GetWeatherCity city={ city } key={ city } />
                )
            })}
        </div>
        
    )
}