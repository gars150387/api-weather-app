import React from "react";
import { Card } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

export const GetWeatherItem = ({ city, description }) => {

    console.log({ description, city})
    return (
        <div>
            <Card style={{ border: 'solid 1px black', margin: '25px', width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{city}</Card.Title>
                    <Card.Text >
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )

}