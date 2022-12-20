import { useState } from 'react';

import './App.css';

import Hourly from './Components/Hourly/Hourly';
import MainInfo from './Components/Main__info/MainInfo';


import { AiOutlineSearch } from "react-icons/ai";

function App() {

  const API_KEY = "6af969125d9ac9a4b176d802c1735756";
  const [cityy, setCity] = useState('Kyiv')
  const [text, setText] = useState('pune')

  const getCurrentWeatherData = async () => {
    const city = cityy;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    return response.json();
  }

  return (
    <div className="App">
      <MainInfo getCurrentWeatherData={getCurrentWeatherData} />
      <form className='App__form' onSubmit={(e) => {
        e.preventDefault();
        setCity(text);
      }}>
        <h2>Change city</h2>
        <div className='App__form__input'>
          <input onChange={(е) => setText(е.currentTarget.value)} />
          <button><AiOutlineSearch /></button>
        </div>
      </form>
      <Hourly API_KEY ={API_KEY} city = {cityy}/>
    </div>
  );
}

export default App;
