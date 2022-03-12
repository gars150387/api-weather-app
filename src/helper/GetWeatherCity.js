import React, { useEffect, useState } from "react";
import { GetWeatherItem } from "../components/CityWeatherItem";
import { CityMainItem } from '../components/CityMainItem';

export const GetWeatherCity = ({ city }) => {

    const [fetchedWeather, setFetchedWeather] = useState([])

    const [fetchedMain, setFetchedMain] = useState([])

    useEffect(() => {
        GetWeather(city);
    }, [])

    const GetWeather = async () => {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=750f844a271e6a0e4d5caf0107a40189`
        const response = await fetch(url);
        const data = await response.json()
        console.log({data})

        const arrayValues = Object.keys(data.main).map((key)=> [(key), data.main[key]])
        console.log( 'arrayValues', arrayValues)

        const { weather } = data;
        console.log({ weather })

        const weatherInfo = weather.map(({id, description, main})=>{
            return {
                id: id,
                main: main,
                description: description
            }
        })

        const renderedMain = [arrayValues[0], arrayValues[1], arrayValues[4], arrayValues[5]]

        console.log('renderedMain', renderedMain)

        setFetchedWeather(weatherInfo)

        setFetchedMain( renderedMain)
    }

    const id = Math.floor( Math.random()*500+1)

    console.log('random id', id)

    return (
        <div>
            <h4>{city}</h4>
            <ol>
                {fetchedWeather.map(item => {
                    return (
                        <ul  key={ id }>
                            <li>
                                {fetchedWeather.map( item =>{
                                    return (
                                        <h3 key={ id }>
                                            <GetWeatherItem 
                                            { ...item }
                                            />
                                        </h3>
                                    )
                                })}
                            </li>
                        </ul>
                    )
                })}
            </ol>
            <ol>
            {fetchedMain.map( info =>{
                return (
                    <h3>
                        { info }
                    </h3>
                )
            })}
            </ol>
        </div>
    )
}