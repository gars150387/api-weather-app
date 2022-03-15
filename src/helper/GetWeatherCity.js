import React, { useEffect, useState } from "react";
import { GetWeatherItem } from "../components/CityWeatherItem";

export const GetWeatherCity = ({ city }) => {

    const [fetchedWeather, setFetchedWeather] = useState([])

    const [fetchedMain, setFetchedMain] = useState([])

    useEffect(() => {
        GetWeather(city);
    }, [])

    const GetWeather = async () => {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=750f844a271e6a0e4d5caf0107a40189&units=metric`
        const response = await fetch(url);
        const data = await response.json()

        const arrayValues = Object.keys(data.main).map((key) => [(key), data.main[key]])

        const { weather } = data;

        const weatherInfo = weather.map(({ id, description, main }) => {
            return {
                id: id,
                main: main,
                description: description
            }
        })

        const renderedMain = [arrayValues[0], arrayValues[1], arrayValues[4], arrayValues[5]]

        setFetchedWeather(weatherInfo)

        setFetchedMain(renderedMain)
    }

    const id = Math.floor(Math.random() * 500 + 1)

    return (
        <div id="bodyAppDetail">
            <h1 className="titleCity">{city}</h1>
            <small className="expression">***Expression in Celsius***</small>
            <ol>
                {fetchedMain.map(info => {
                    return (
                        <h3>
                            {info[0]}: {info[1]} 
                        </h3>
                    )
                })}
            </ol>
            <ol>
                {fetchedWeather.map(({ main, description }) => {
                    return (
                        <div>
                            <h3> main: {main} </h3>
                            <h3> description:{description} </h3>
                        </div>
                    )
                })}
            </ol>
        </div>
    )
}