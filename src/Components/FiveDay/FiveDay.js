import React, { useState, useEffect } from 'react'

import './FiveDay.scss'

const getHourlyForecast = async () => {
    const place = city;
    let mass = [];
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${API_KEY}&units=metric`)
        .then((response) => response.json())
        .then((response) => {
            for (let i = 0; i < 3; i++) {
                let obj = {
                    town: place,
                    time: response.list[i].dt_txt,
                    temp: response.list[i].main.temp,
                    icon: response.list[i].weather[0].icon,
                    id: i
                }
                mass = [...mass, obj]
            }
            setWeather([...weather, ...mass])
        })
}
useEffect(() => {
    getHourlyForecast();
}, [city])

function FiveDay() {
    return (
        <div className='FiveDay'>
            <div className='FiveDay__content'>
                <div className='FiveDay__content__card' key={e.id}>
                    <h2>{e.town}</h2>
                    <h2>{e.time}</h2>
                    <img src={`https://openweathermap.org/img/wn/${e.icon}@2x.png`} />
                    <p>{e.temp}</p>
                </div>
            </div>
        </div >
    )
}

export default FiveDay