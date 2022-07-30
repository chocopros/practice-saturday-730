import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'



const Card__Weather = ({coords}) => {
    //console.log(coords.lat)
    //console.log(coords.lon)
    const [weather, setWeather] = useState()

    useEffect (() =>{
        if (coords?.lat){
            const APIkey= '33362d39e5912619c9553d5b0a209cab'            
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat${coords?.lat}&lon${coords?.lon}&appid=${APIkey}`
            axios.get(URL)
                .then(res => setWeather(res.data))
                .catch(err => console.log(err))
        }

    },[])

    

  

  return (
    <div>Card__Weather</div>
  )
}

export default Card__Weather