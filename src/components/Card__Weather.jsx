import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'



const Card__Weather = ({coords}) => {
    //console.log(coords.lat)
    //console.log(coords.lon)
    const [weather, setWeather] = useState()
    const [temperture, setTemperture] = useState()
    const [isCelsius, setIsCelsius] = useState(true)

    useEffect (() =>{
        if (coords?.lat){
            const APIkey= '33362d39e5912619c9553d5b0a209cab'            
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.lat}&lon=${coords?.lon}&appid=${APIkey}`
            axios.get(URL)
                .then(res => {
                  setWeather(res.data)
                  const temp = {
                    celsius: `${Math.floor(res.data.main.temp - 273.15)} °C`,
                    farenheit:`${Math.floor((res.data.main.temp - 273.15) * 9 / 5 + 32)} °F`
                  }
                  setTemperture(temp) 
                })
                .catch(err => console.log(err))
        }},[coords?.lon, coords?.lat])

    console.log(weather)
    const handleClick = () =>{
      setIsCelsius(!isCelsius)

    }
  return (
    <div className="card">
      <div className="card__body">
        <div className="body__img">
          <div className='card__img'>
            <img src={ weather &&  `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
          </div>
          <div className='card__grados'><h2>{isCelsius ? temperture?.celsius : temperture?.farenheit}</h2></div>
        </div>
        <div className="card__info">
          <h2>Today</h2>
          <h1>{weather?.name}, {weather?.sys.country}</h1>
          <h2>"{weather?.weather[0].description}"</h2>
          <ul>
            <li><span>Wind Speed: </span>{weather?.wind.speed} m/s</li>
            <li><span>Clouds: </span>{weather?.clouds.all}%</li>
            <li><span>Preasure: </span>{weather?.main.pressure} hPa</li>
          </ul>
          <button className='card__btn' onClick={handleClick}>{isCelsius ? 'Change to °F' : 'Change to °C'}</button>
        </div>
      </div>
    </div>
  )
}

export default Card__Weather