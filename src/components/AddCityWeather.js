import React, { useState } from "react";

export const AddCityWeather = ({ setCities }) =>{

    const [ inputValue, setInputValue] = useState('')

    const handleValue =(e)=>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{

        setCities( city => [inputValue]);
        setInputValue('')

        // console.log(setCities )
    }

    return(
        <div id="inputComponent">
            <input className="input" onChange={ handleValue } placeholder='Search your city' />
            <button className="button" onClick={ handleSubmit }><small>Search</small></button>
        </div>
    )
}