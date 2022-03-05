import React, { useState } from 'react'
import { GetWeather } from '../components/GetWeather'

export const HomePage = () =>{

    const [ cities, setCities] = useState([])


    //link to fetch: https://api.openweathermap.org/data/2.5/weather?appid=750f844a271e6a0e4d5caf0107a40189&q=miami

    return (
        <>
            <h1>Weather App</h1>
            <br/>

            { cities }

            <br/>

            <GetWeather setCities={ setCities } />

            <br/>

            {cities.map( city =>{
                return (
                    <ol key={city}>
                        {city}
                    </ol>
                )
            })}
        </>
        
    )
}