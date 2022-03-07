import React from "react";

export const GetWeatherItem = ({ main, icon, description }) =>{

    console.log({description, icon, main})
    return(
        <div>
            <p>{main}</p>
            <p>{icon}</p>
            <p>{description}</p>
        </div>
    )

}