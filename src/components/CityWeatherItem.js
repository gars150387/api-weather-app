import React from "react";
import { Card } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

export const GetWeatherItem = ({ description, main }) => {

    console.log({ description, main })
    return (
        <div>
            <h3> { main } </h3>
            <h3> { description } </h3>
        </div>
    )

}