import React, { useState } from "react";

export const GetWeather = ({ setCities }) =>{

    const [ inputValue, setInputValue] = useState('')

    const handleValue =(e)=>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{

        setCities( city => [inputValue])
        console.log( setCities )
    }


    return(
        <div>
            <input onChange={ handleValue } />
            <button onClick={ handleSubmit }><h3>Search</h3></button>
        </div>
    )
}