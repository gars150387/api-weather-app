import React from "react";

export const CityMainItem = ( props ) => {

    console.log( props )
    return (
        <div>
            <h3> Temp: { props.info } </h3>
            <h3> Feels Like: { props.info } </h3>
            <h3> Humidity: { props.info } </h3>
            <h3> Pressure: { props.info } </h3>
        </div>
    )

}