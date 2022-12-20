import React, { useState, useEffect } from 'react'


import './Hourly.scss'

function Hourly({ API_KEY, city }) {

    const [weather, setWeather] = useState([]);

    const degri = '\u00B0'

    const getHourlyForecast = async () => {
        const place = city;
        let mass = [];
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${API_KEY}&units=metric`)
            .then((response) => response.json())
            .then((response) => {
                for (let i = 0; i < 9; i++) {
                    let obj = {
                        town: place,
                        time: response.list[i].dt_txt,
                        temp: response.list[i].main.temp,
                        icon: response.list[i].weather[0].icon,
                        description: response.list[i].weather[0].description,
                        id: i
                    }
                    mass = [...mass, obj]
                }
                setWeather([...mass])
            })
    }
    useEffect(() => {
        getHourlyForecast();
    }, [city])


    return (
        <div className='Hourly'>
            <div className='Hourly__content'>
                {weather.map((e) => {
                    return (
                        <div className='Hourly__content__card' key={e.id}>
                            <h2>{e.town}</h2>
                            <h2>{e.time}</h2>
                            <img src={`https://openweathermap.org/img/wn/${e.icon}@2x.png`} />
                            <p>{e.description}</p>
                            <p>{e.temp}{degri}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Hourly