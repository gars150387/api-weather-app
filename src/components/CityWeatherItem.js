import React from "react";

export const GetWeatherItem = ({ description, main }) => {

    console.log({ description, main })
    return (
        <div>
            <h3> main: { main } </h3>
            <h3> description: { description } </h3>
        </div>
    )

}