import React, { useEffect, useState } from 'react'

import "./MainInfo.scss"

function MainInfo({ getCurrentWeatherData }) {

    const [city, setCity] = useState()
    const [temp, setTemp] = useState()
    const [desc, setDesc] = useState()
    const [higest, setHigest] = useState()
    const [lowest, setLowest] = useState()

    const degri = '\u00B0'

    const GetMainInfo = async () => {
        const json = await getCurrentWeatherData();
        setCity(json.name);
        setTemp(json.main.temp);
        setDesc(json.weather[0].description);
        setHigest(json.main.temp_max);
        setLowest(json.main.temp_min);
    }
    useEffect(() => {
        GetMainInfo();
    })


    return (
        <div className='MainInfo'>
            <h1>Weather App</h1>
            <div className='MainInfo__content'>
                <div className='MainInfo__content__item'>
                    <h2>City</h2>
                    <p>{city}</p>
                </div>
                <div className='MainInfo__content__item'>
                    <h2>Temp</h2>
                    <p>{temp}{degri}</p>
                </div>
                <div className='MainInfo__content__item'>
                    <h2>Describe</h2>
                    <p>{desc}</p>
                </div>
                <div className='MainInfo__content__item'>
                    <h2>Higest temp</h2>
                    <p>{higest}{degri}</p>
                </div>
                <div className='MainInfo__content__item'>
                    <h2>Lowest temp</h2>
                    <p>{lowest}{degri}</p>
                </div>
            </div>
        </div>
    )
}

export default MainInfo