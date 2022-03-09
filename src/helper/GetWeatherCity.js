import React, { useEffect, useState } from "react";
import { GetWeatherItem } from "../components/CityWeatherItem";

export const GetWeatherCity = ({ city }) => {

    const [fetchedWeather, setFetchedWeather] = useState([])

    useEffect(() => {
        GetWeather( city );
    }, [])

    const GetWeather = async () => {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=750f844a271e6a0e4d5caf0107a40189`
        const response = await fetch(url);
        const data = await response.json()
        // console.log({data})

        const {main} = data;
        console.log({main});

        const {weather} = data;
        console.log({weather})

        const weatherInfo = weather.map(({id, description, icon, main}) => {
            return {
                id: id,
                description: description,
                icon: icon,
                main: main
            }
        })
        console.log('weatherInfo', weatherInfo)

        const { temp, humidity, feelsLike, grnd_level} = main

        console.log({ temp, feelsLike, humidity, grnd_level})

        setFetchedWeather( weatherInfo )

        console.log('fetchedWeather', fetchedWeather )
    }

    return (
        <div>
            <h4>{city}</h4>
            <ol>
                {fetchedWeather.map(item => {
                    return (
                        <GetWeatherItem 
                        key={ item.id} 
                        { ...item } />
                    )
                })}
            </ol>
        </div>
    )
}