import React, { useEffect, useState } from "react";
import { GetWeatherItem } from "./GetWeatherItem";
import { GetWeatherCity } from "./helper/GetWeatherCity";

export const GetWeatherFetched = ({ city }) =>{
    
    const [forecast, setForecast] = useState();

    useEffect(()=>{
        GetWeatherCity( city )
        .then( setForecast )
    }, [ city ])

    return (
        <div>
            {forecast.map( climate => (
                <GetWeatherItem 
                key={climate.div} 
                {...climate}/>
            ))}
        </div>
    )

}